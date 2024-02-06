import { sendSms } from './smsOperetion';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  sendedSms: [],
  operetion: null,
  error: null,
  isloading: false,
};

const smsSlice = createSlice({
  name: 'sendSms',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(sendSms.pending, state => {
        state.isloading = true;
        state.operetion = 'sendSms';
      })
      .addCase(sendSms.fulfilled, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = null;
        state.sendedSms.push(action.payload);
      })
      .addCase(sendSms.rejected, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = action.payload;
      });
  },
});

export const smsReducer = smsSlice.reducer;
