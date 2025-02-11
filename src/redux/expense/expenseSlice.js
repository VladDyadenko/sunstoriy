import { createZvitSelectedPeriod } from 'redux/zvit/zvitOperetion';
import {
  addExpense,
  fetchExpenses,
  getExpensesByDate,
} from './expenseOperetion';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  expense: [],
  expensesPeriod: [],
  isloading: false,
  operetion: null,
  zvitStatus: '',
  error: null,
};

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchExpenses.pending, state => {
        state.isloading = true;
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.expense = action.payload;
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(addExpense.pending, state => {
        state.isloading = true;
        state.operetion = 'addExpense';
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = null;
        state.expense.push(action.payload);
      })
      .addCase(addExpense.rejected, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = action.payload;
      })
      .addCase(getExpensesByDate.pending, state => {
        state.isloading = true;
        state.zvitStatus = '';
      })
      .addCase(getExpensesByDate.fulfilled, (state, action) => {
        state.isloading = false;
        state.zvitStatus = 'expenses_by_period';
        state.error = null;
        state.expensesPeriod = action.payload;
      })
      .addCase(createZvitSelectedPeriod.pending, state => {
        state.zvitStatus = ''; // Очистка при створенні звіту
      })
      .addCase(getExpensesByDate.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export const expenseReducer = expenseSlice.reducer;
