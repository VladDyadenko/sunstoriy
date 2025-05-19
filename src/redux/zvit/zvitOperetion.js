import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosWithAuth } from 'api/api.interceptors';
import { Notify } from 'notiflix';

export const createZvitSelectedPeriod = createAsyncThunk(
  'zvit/createZvit',
  async (choesData, thunkAPI) => {
    try {
      const { data } = await axiosWithAuth.get(`/zvit/one_month_total`, {
        params: choesData,
      });
      if (data) {
        Notify.success('Успішно');
      }
      return data;
    } catch (err) {
      if (err) {
        Notify.failure(err.response.data.message);
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const getZvitChildrensPeriod = createAsyncThunk(
  'zvit/createZvitChildrens',
  async (choesData, thunkAPI) => {
    try {
      const { data } = await axiosWithAuth.get(`/zvit/childrens_period`, {
        params: choesData,
      });
      if (data) {
        Notify.success('Успішно');
      }
      return data;
    } catch (err) {
      if (err) {
        Notify.failure(err.response.data.message);
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getZvitChildByIdAndPeriod = createAsyncThunk(
  'zvit/createZvitChild',
  async (choesData, thunkAPI) => {
    const { id, selectedPeriod } = choesData;
    try {
      const { data } = await axiosWithAuth.get(`/zvit/children_period/${id}`, {
        params: selectedPeriod,
      });
      if (data) {
        Notify.success('Успішно');
      }
      return data;
    } catch (err) {
      if (err) {
        Notify.failure(err.response.data.message);
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
