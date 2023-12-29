import axios from 'axios';
import { Notify } from 'notiflix';

// axios.defaults.baseURL = 'https://sunstoriy-back.onrender.com/';
axios.defaults.baseURL = 'http://localhost:5000//';

const tokenOperation = {
  setToken: token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  clearToken: () => {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerApi = async (user, thunkAPI) => {
  try {
    const { data } = await axios.post('/auth/register', user);
    tokenOperation.setToken(data.token);
    Notify.success('Registrated succesfully!');
    return data;
  } catch (error) {
    if (error.response && error.response.status === 409) {
      Notify.failure('Email already registered');
    } else {
      Notify.failure('Registration failed!');
    }
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const signinApi = async (user, thunkAPI) => {
  try {
    const { data } = await axios.post('/auth/login', user);
    tokenOperation.setToken(data.token);
    Notify.success('Login sucess!');
    return data;
  } catch (error) {
    Notify.failure('Login failed!');
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const logoutApi = async (_, thunkAPI) => {
  try {
    const { data } = await axios.post(`/auth/logout`);
    Notify.info('Logout');
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const currentApi = async (_, thunkAPI) => {
  const state = thunkAPI.getState();

  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    tokenOperation.setToken(persistedToken);
    const { data } = await axios.get('/auth/current');
    return data;
  } catch (error) {
    Notify.info('Token is obsolete');
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const updateNameAndAvatar = async ({ name, avatar }, thunkAPI) => {
  try {
    const { data } = await axios.post(
      '/auth/upload',
      {
        name,
        avatar,
      },
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );
    Notify.success('User profile updated successfully!');
    return data;
  } catch (error) {
    Notify.info('Failed to update the name');
    return thunkAPI.rejectWithValue(error.message);
  }
};
