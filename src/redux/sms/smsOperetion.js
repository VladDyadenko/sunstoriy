import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { Notify } from 'notiflix';

export const sendSms = createAsyncThunk(
  'sms/sendSms',
  async (smsData, thunkAPI) => {
    // console.log(smsData);
    // try {
    //   const { data } = await axios.post('/sms/send', smsData, {});
    //   if (data) {
    //     Notify.success('СМС відправлено');
    //   }
    //   return data;
    // } catch (err) {
    //   if (err) {
    //     Notify.failure(err.response.data.message);
    //   }
    //   return thunkAPI.rejectWithValue(err.message);
    // }
  }
);
