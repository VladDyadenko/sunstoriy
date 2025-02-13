import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

export const fetchExpenses = createAsyncThunk(
  'expense',
  async (_, thunkAPI) => {
    try {
      const { expenses } = await axios.get('/expense');
      console.log(expenses);
      return expenses;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addExpense = createAsyncThunk(
  'expense/addExpense',
  async (expenseData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/expense', expenseData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (data) {
        Notify.success('Витрати успішно додані');
      }
      return data;
    } catch (err) {
      if (err) {
        Notify.failure(err.response.data.message);
      }
      return rejectWithValue(err.message);
    }
  }
);

export const getExpensesByDate = createAsyncThunk(
  'expense/getExpenseByDate',
  async (choesData, thunkAPI) => {
    try {
      const { data } = await axios.get('/expense/expenses_by_date', {
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
export const getExpenseById = createAsyncThunk(
  'expense/getById',
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`expense/expense/${id}`);
      if (res) {
        Notify.success('Успішно');
      }

      return res.data;
    } catch (err) {
      if (err) {
        Notify.failure(err.response.data.message);
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const updateExpense = createAsyncThunk(
  'expense/updateExpense',
  async (expenseData, thunkAPI) => {
    try {
      const { id, values } = expenseData;
      const { data } = await axios.put(`/expense/${id}`, values, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (data) {
        Notify.success('Розход змінений');
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
export const deleteExpenseById = createAsyncThunk(
  'expense/deleteExpense',
  async (id, thunkAPI) => {
    try {
      const res = await axios.patch(`expense/delete/${id}`);
      if (res) {
        Notify.success('Розход видалений успішно!');
      }
      return res.data;
    } catch (err) {
      if (err) {
        Notify.failure(err.response.data.message);
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
