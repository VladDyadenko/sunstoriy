import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosWithAuth } from 'api/api.interceptors';
import { Notify } from 'notiflix';

export const sendSms = createAsyncThunk(
  'sms/sendSms',
  async (smsDataInfo, thunkAPI) => {
    try {
      const { data } = await axiosWithAuth.post('/sms/send', smsDataInfo, {});
      const { status } = data;
      if (status === 'ENROUTE' || status === 'DELIVRD') {
        Notify.success('СМС успішно відправлено');
      } else Notify.failure(`${status}`);
      return data;
    } catch (err) {
      if (err) {
        Notify.failure(err.response.data.message);
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
