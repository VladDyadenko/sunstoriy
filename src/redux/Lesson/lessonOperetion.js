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
    console.log(lessonData);
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

export const choseLessonGraph = createAsyncThunk(
  'lesson/choesLesson',
  async (choesData, thunkAPI) => {
    try {
      const { data } = await axios.get('/lesson/office/office_date', {
        params: choesData,
      });
      if (data) {
        Notify.success('Заняття вибраного періоду');
      } else Notify.info('Заняття не заплановані');
      return data;
    } catch (err) {
      if (err) {
        Notify.failure(err.response.data.message);
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
