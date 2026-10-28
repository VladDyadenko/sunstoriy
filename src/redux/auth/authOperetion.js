import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';
import { axiosClassic, axiosWithAuth } from '../../api/api.interceptors';

export const removeFromStorage = () => {
  localStorage.removeItem('persist:auth');
};

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axiosClassic.post('/auth/register', credentials, {
        credentials: 'include',
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
      const { data } = await axiosClassic.post('/auth/login', credentials, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
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
      await axiosWithAuth.get('/auth/logout', {
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
      const { data } = await axiosWithAuth.get('/auth/current', {
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

      const { data } = await axiosWithAuth.patch('/auth/upload', formData, {
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
      const { data } = await axiosClassic.get('/auth/refresh_tokens', {
        withCredentials: true,
        headers: { Accept: 'application/json' },
      });

      return data;
    } catch (error) {
      removeFromStorage();
      return thunkAPI.rejectWithValue('Session expired');
    }
  }
);

export const googleAuthSuccess = createAsyncThunk(
  'auth/googleSuccess',
  async (accessToken, thunkAPI) => {
    try {
      const { data } = await axiosWithAuth.get('/auth/current', {
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
      const { data } = await axiosClassic.get('/auth/refresh_tokens', {
        withCredentials: true,
        headers: { Accept: 'application/json' },
      });
      await thunkAPI.dispatch(currentThunk(data.accessToken));

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(null);
    }
  }
);
