import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

// ! Сенсорна
export const sensornayaLessons = createAsyncThunk(
  'lesson/lessonSensornaya',
  async (date, thunkAPI) => {
    try {
      const choesData = { offices: ['Сенсорна'], dateCurrentLesson: date };
      const { data } = await axios.get('/lesson/office/office_date', {
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
// ! Логопед

export const logopedLessons = createAsyncThunk(
  'lesson/lessonLogoped',
  async (date, thunkAPI) => {
    try {
      const choesData = { offices: ['Логопед'], dateCurrentLesson: date };
      const { data } = await axios.get('/lesson/office/office_date', {
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

export const deleteLogopedLessonById = createAsyncThunk(
  'lesson/deleteLogopedLesson',
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
// ! Корекційний

export const correctionLessons = createAsyncThunk(
  'lesson/lessonСorrection',
  async (date, thunkAPI) => {
    try {
      const choesData = { offices: ['Корекційний'], dateCurrentLesson: date };
      const { data } = await axios.get('/lesson/office/office_date', {
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

export const deleteСorrectionLessonById = createAsyncThunk(
  'lesson/deleteСorrectionLesson',
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
// ! preschool

export const preschoolLessons = createAsyncThunk(
  'lesson/lessonPreschool',
  async (date, thunkAPI) => {
    try {
      const choesData = { offices: ['Preschool'], dateCurrentLesson: date };
      const { data } = await axios.get('/lesson/office/office_date', {
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

export const deletePreschoolLessonById = createAsyncThunk(
  'lesson/deletePreschoolLesson',
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

// ! preschoolInclusion

export const preschoolInclusionLessons = createAsyncThunk(
  'lesson/lessonPreschoolInclusion',
  async (date, thunkAPI) => {
    try {
      const choesData = {
        offices: ['Preschool-інклюзія'],
        dateCurrentLesson: date,
      };
      const { data } = await axios.get('/lesson/office/office_date', {
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

export const deletePreschoolInclusionLessonById = createAsyncThunk(
  'lesson/deletePreschoolInclusion',
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
