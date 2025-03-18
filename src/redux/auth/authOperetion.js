import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

axios.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then(token => {
            originalRequest.headers.Authorization = `${token}`;
            return axios(originalRequest);
          })
          .catch(err => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      return new Promise(function (resolve, reject) {
        axios
          .get('/auth/refresh_tokens', {
            credentials: 'include',
            headers: {
              Accept: 'application/json',
            },
          })
          .then(({ data }) => {
            axios.defaults.headers.common.Authorization = `${data.accessToken}`;
            originalRequest.headers.Authorization = `${data.accessToken}`;
            processQueue(null, data.accessToken);
            resolve(axios(originalRequest));
          })
          .catch(err => {
            processQueue(err, null);
            reject(err);
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
    }

    return Promise.reject(error);
  }
);

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/register', credentials, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      Notify.success('Registrated succesfully!');
      return data;
    } catch (err) {
      Notify.failure('Registration error');
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const signinThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/login', credentials, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      axios.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
      Notify.success('Login success!');
      return data;
    } catch (err) {
      Notify.failure('Login failed!');
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.get('/auth/logout', {
        credentials: 'include',
        headers: {
          Accept: 'application/json',
        },
      }); // не сохраняем ответ, так как нам важен только статус

      axios.defaults.headers.common.Authorization = '';
      localStorage.removeItem('persist:auth');
      Notify.info('Logout successful');
      return null; // возвращаем null, так как данных нет
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentThunk = createAsyncThunk(
  'auth/current',
  async (token, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = token || state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      axios.defaults.headers.common.Authorization = persistedToken;
      const { data } = await axios.get('/auth/current', {
        credentials: 'include',
        headers: {
          Accept: 'application/json',
        },
      });
      return data;
    } catch (error) {
      Notify.info('Token is obsolete');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateNameThunk = createAsyncThunk(
  'auth/setName',
  async ({ name, avatar }, thunkAPI) => {
    try {
      const formData = new FormData();
      if (name) formData.append('name', name);
      if (avatar) formData.append('avatar', avatar);

      const { data } = await axios.patch('/auth/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      Notify.success('Profile updated successfully!');
      return data;
    } catch (err) {
      Notify.failure('Failed to update profile');
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const refreshTokensThunk = createAsyncThunk(
  'auth/refreshTokens',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/auth/refresh_tokens', {
        withCredentials: true, // ✅ Дозволяє браузеру передавати cookies
        headers: { Accept: 'application/json' },
      });

      // Оновлюємо токен у заголовках axios
      axios.defaults.headers.common.Authorization = `${data.accessToken}`;

      // Повертаємо дані, щоб зберегти їх у стані Redux
      return data;
    } catch (error) {
      localStorage.removeItem('persist:auth');
      return thunkAPI.rejectWithValue('Session expired');
    }
  }
);

export const googleAuthSuccess = createAsyncThunk(
  'auth/googleSuccess',
  async (accessToken, thunkAPI) => {
    try {
      // Устанавливаем токен в заголовки axios
      axios.defaults.headers.common.Authorization = `${accessToken}`;

      // Получаем данные пользователя
      const { data } = await axios.get('/auth/current', {
        credentials: 'include',
        headers: {
          Accept: 'application/json',
        },
      });

      Notify.success('Google authentication successful!');
      return {
        user: data,
        accessToken,
      };
    } catch (error) {
      Notify.failure('Failed to get user data');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const initializeAppThunk = createAsyncThunk(
  'auth/initialize',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/auth/refresh_tokens', {
        withCredentials: true,
        headers: { Accept: 'application/json' },
      });

      axios.defaults.headers.common.Authorization = `${data.accessToken}`;

      // После успешного обновления токена, получаем данные пользователя
      await thunkAPI.dispatch(currentThunk(data.accessToken));

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(null);
    }
  }
);
