import { getExpensesByDate } from 'redux/expense/expenseOperetion';
import { createZvitSelectedPeriod } from './zvitOperetion';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  zvitSelectedPeriod: {},
  isloading: false,
  operetion: null,
  zvitStatus: '',
  error: null,
};

const zvitSlice = createSlice({
  name: 'zvit',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createZvitSelectedPeriod.pending, state => {
        state.isloading = true;
        state.operetion = null;
        state.zvitStatus = '';
      })
      .addCase(createZvitSelectedPeriod.fulfilled, (state, action) => {
        state.isloading = false;
        state.operetion = 'createZvit';
        state.zvitStatus = 'report_for_period';
        state.error = null;
        state.zvitSelectedPeriod = action.payload;
      })
      .addCase(getExpensesByDate.pending, state => {
        state.zvitStatus = ''; // Очистка при створенні звіту
      })
      .addCase(createZvitSelectedPeriod.rejected, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = action.payload;
      });
  },
});

export const zvitReducer = zvitSlice.reducer;
