import { addExpense, fetchExpenses } from './expenseOperetion';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  expense: [],
  isloading: false,
  operetion: null,
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
      });
  },
});

export const expenseReducer = expenseSlice.reducer;
