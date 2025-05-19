import axios from 'axios';
import { errorCatch, getContentType } from './api.helper';
import { Notify } from 'notiflix';

const publicRoutes = [
  '/auth/login',
  '/auth/register',
  '/auth/refresh_tokens',
  '/auth/success-google',
];

const options = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: getContentType(),
  withCredentials: true,
};
const axiosClassic = axios.create(options);
const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use(
  config => {
    const persistAuth = localStorage.getItem('persist:auth');

    const isPublicRoute = publicRoutes.some(
      route => config.url?.includes(route) || config.url?.startsWith('/auth/')
    );

    if (isPublicRoute) {
      return config;
    }

    if (!persistAuth) {
      Notify.failure('Відсутній токен авторизації!');
      window.location.href = '/sunstoriy/auth/signin';
      return Promise.reject(new Error('No auth token'));
    }
    try {
      const authData = JSON.parse(persistAuth);
      const token = JSON.parse(authData.token);
      if (token) {
        config.headers.Authorization = token;
      } else {
        Notify.failure('Можлива помилка з токеном авториизації');
        throw new Error('Token is empty');
      }
      return config;
    } catch (err) {
      Notify.failure(`'Token parse error:', ${err}`);
      console.warn('Token parse error:', err);
      window.location.href = '/sunstoriy/auth/signin';
      return Promise.reject(err);
    }
  },
  error => Promise.reject(error)
);

axiosWithAuth.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config;
    const isUnauthorized =
      error?.response?.status === 401 ||
      errorCatch(error) === 'jwt expired' ||
      errorCatch(error) === 'jwt must be provided';

    if (isUnauthorized && !originalRequest._isRetry) {
      originalRequest._isRetry = true;

      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}auth/refresh_tokens`,
          {
            withCredentials: true,
          }
        );
        const newToken = data?.accessToken;

        if (newToken) {
          originalRequest.headers.Authorization = newToken;
          return axiosWithAuth(originalRequest);
        }

        return Promise.reject(error);
      } catch (refreshError) {
        localStorage.removeItem('persist:auth');
        window.location.href = '/sunstoriy/auth/signin';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export { axiosWithAuth, axiosClassic };
