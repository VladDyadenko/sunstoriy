import { createZvitSelectedPeriod } from 'redux/zvit/zvitOperetion';
import {
  addExpense,
  deleteExpenseById,
  fetchExpenses,
  getExpenseById,
  getExpensesByDate,
  updateExpense,
} from './expenseOperetion';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  expense: [],
  expensesPeriod: [],
  expenseSelected: null,
  isloading: false,
  operetion: null,
  zvitStatus: '',
  error: null,
};

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    clearExpenseSelected: state => {
      state.expenseSelected = null;
    },
  },
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
        if (state.expensesPeriod.expenses.length > 0) {
          state.expensesPeriod.expenses.push(action.payload);
          state.expensesPeriod.expenses.sort(
            (a, b) => new Date(a.date) - new Date(b.date)
          );
        }
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
      .addCase(getExpensesByDate.fulfilled, (state, { payload }) => {
        state.isloading = false;
        state.zvitStatus = 'expenses_by_period';
        state.error = null;
        state.expensesPeriod = payload;
      })
      .addCase(createZvitSelectedPeriod.pending, state => {
        state.zvitStatus = '';
      })
      .addCase(getExpensesByDate.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(getExpenseById.pending, state => {
        state.isloading = true;
      })
      .addCase(getExpenseById.fulfilled, (state, { payload }) => {
        state.isloading = false;
        state.error = null;
        state.expenseSelected = payload;
      })
      .addCase(getExpenseById.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(updateExpense.pending, state => {
        state.isloading = true;
        state.operetion = 'updateExpense';
      })
      .addCase(updateExpense.fulfilled, (state, { payload }) => {
        state.isloading = false;
        state.operetion = null;
        state.error = null;
        const id = payload._id;
        const index = state.expensesPeriod.expenses?.findIndex(
          vel => vel._id === id
        );
        if (index !== -1) {
          state.expensesPeriod.expenses[index] = payload;
        }
      })
      .addCase(updateExpense.rejected, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = action.payload;
      })
      .addCase(deleteExpenseById.pending, (state, { meta }) => {
        state.operetion = `${meta.arg}`;
        state.isloading = true;
      })
      .addCase(deleteExpenseById.fulfilled, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = null;
        const id = action.meta.arg;
        const index = state.expense.findIndex(vel => vel._id === id);
        if (index !== -1) {
          state.expense.splice(index, 1);
        }
        const indexSelectedExpenses = state.expensesPeriod.expenses?.findIndex(
          vel => vel._id === id
        );
        if (indexSelectedExpenses !== -1) {
          state.expensesPeriod.expenses.splice(indexSelectedExpenses, 1);
        }
      })
      .addCase(deleteExpenseById.rejected, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export const expenseReducer = expenseSlice.reducer;
export const { clearExpenseSelected } = expenseSlice.actions;
