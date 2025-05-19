import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosWithAuth } from 'api/api.interceptors';
import { Notify } from 'notiflix';

export const getSalarisByDate = createAsyncThunk(
  'salary/getSalarisByDate',
  async (choesData, thunkAPI) => {
    try {
      const { data } = await axiosWithAuth.get('/salary/salary_by_date', {
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
export const updateSalary = createAsyncThunk(
  'salary/updateSalary',
  async (salaryData, thunkAPI) => {
    try {
      const { id, values } = salaryData;
      const { data } = await axiosWithAuth.put(`/salary/${id}`, values, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (data) {
        Notify.success('Зарплата змінена');
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
export const getSalaryById = createAsyncThunk(
  'salary/getById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axiosWithAuth.get(`salary/salary/${id}`);
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
export const deleteSalaryById = createAsyncThunk(
  'salary/deleteSalary',
  async (id, thunkAPI) => {
    try {
      const res = await axiosWithAuth.patch(`salary/delete/${id}`);
      if (res) {
        Notify.success('Нарахована ЗП видалена успішно!');
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
