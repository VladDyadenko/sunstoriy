import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosWithAuth } from 'api/api.interceptors';
import { Notify } from 'notiflix';

export const selectedLessonsByDateTeacher = createAsyncThunk(
  'lesson/selectedLessons',
  async (choesData, thunkAPI) => {
    try {
      const { data } = await axiosWithAuth.get('/lesson/office/office_date', {
        params: choesData,
      });
      if (data.length > 0) {
        Notify.success('Заняття вибраного періоду');
      } else Notify.warning('Заняття на цю дату(період) не заплановані');

      return data;
    } catch (err) {
      if (err) {
        Notify.failure(err.response.data.message);
      }
      return [];
    }
  }
);
export const deleteLessonByOfficeAndId = createAsyncThunk(
  'lesson/deleteLesson',
  async (id, thunkAPI) => {
    try {
      const res = await axiosWithAuth.patch(`lesson/delete/${id}`);
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
