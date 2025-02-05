import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

export const addExpense = createAsyncThunk(
  'lesson/addLesson',
  async (expenseData, thunkAPI) => {
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
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
