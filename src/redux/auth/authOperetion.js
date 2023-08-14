import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signinApi,
  logoutApi,
  registerApi,
  currentApi,
  updateNameAndAvatar,
} from './api';

export const registerThunk = createAsyncThunk('auth/singup', user => {
  return registerApi(user);
});
export const signinThunk = createAsyncThunk('auth/signin', id => {
  return signinApi(id);
});
export const logoutThunk = createAsyncThunk('auth/logout', () => {
  return logoutApi();
});
export const currentThunk = createAsyncThunk('auth/current', (...arr) => {
  return currentApi(...arr);
});
export const updateNameThunk = createAsyncThunk(
  'auth/setName',
  ({ name, avatar }) => {
    return updateNameAndAvatar({ name, avatar });
  }
);
