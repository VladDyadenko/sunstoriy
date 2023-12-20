import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

export const sensornayaLessons = createAsyncThunk(
  'lesson/lessonSensornaya',
  async (date, thunkAPI) => {
    try {
      const choesData = { offices: ['Сенсорна'], dateCurrentLesson: date };
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

export const updateSensornayaLesson = createAsyncThunk(
  'lesson/updateSensornayaLesson',
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

export const deleteSensornayaLessonById = createAsyncThunk(
  'lesson/deleteSensornayLesson',
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
