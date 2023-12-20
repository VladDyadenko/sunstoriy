import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

export const fetchLessons = createAsyncThunk('lessons', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/lesson');
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const addLesson = createAsyncThunk(
  'lesson/addLesson',
  async (lessonData, thunkAPI) => {
    try {
      const { data } = await axios.post('/lesson', lessonData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (data) {
        Notify.success('Заняття успішно додане');
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
export const updateLesson = createAsyncThunk(
  'lesson/updateLesson',
  async (lessonData, thunkAPI) => {
    try {
      const { id, values } = lessonData;
      const { data } = await axios.put(`/lesson/${id}`, values, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (data) {
        Notify.success('Заняття успішно змінене');
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

export const choseLessonGraph = createAsyncThunk(
  'lesson/choesLesson',
  async (choesData, thunkAPI) => {
    try {
      const { data } = await axios.get('/lesson/office/office_date', {
        params: choesData,
      });
      if (data) {
        Notify.success('Заняття вибраного періоду');
      }
      return data;
    } catch (err) {
      if (err) {
        Notify.failure(err.response.data.message);
      }
      return [];
    }
  }
);

export const deleteLessonById = createAsyncThunk(
  'lesson/deleteLesson',
  async (id, thunkAPI) => {
    try {
      const res = await axios.patch(`lesson/delete/${id}`);
      if (res) {
        Notify.success('Заняття видалене зі списку!');
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
