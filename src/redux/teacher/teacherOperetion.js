import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

export const fetchTeachers = createAsyncThunk(
  'teachers',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/teacher');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchTeacherByName = createAsyncThunk(
  'teacher/getTeacherByName',
  async (searchData, thunkAPI) => {
    try {
      const { data } = await axios.get(`/teacher/search?query=${searchData}`);

      return data;
    } catch (err) {
      if (err) {
        Notify.failure(err.response.data.message);
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const addTeacher = createAsyncThunk(
  'teacher/addTeacher',
  async (teacherData, thunkAPI) => {
    try {
      const formData = new FormData();

      for (const key in teacherData) {
        const value = teacherData[key];

        if (key === 'specialization') {
          formData.append(key, value);
        } else if (Array.isArray(value)) {
          for (const file of value) {
            console.log(file);
            formData.append(key, file, file.name);
          }
        } else if (value !== '') {
          formData.append(key, value);
        }
      }

      const { data } = await axios.post('/teacher', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (data) {
        Notify.success('Фахівець успішно доданий');
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
export const updateTeacher = createAsyncThunk(
  'teacher/updateTeacher',
  async (teacherData, thunkAPI) => {
    try {
      const { id, values } = teacherData;

      const formData = new FormData();

      for (const key in values) {
        const value = values[key];

        if (key === 'specialization') {
          formData.append(key, value);
        } else if (Array.isArray(value)) {
          for (const file of value) {
            console.log(file);
            formData.append(key, file, file.name);
          }
        } else if (value !== '') {
          formData.append(key, value);
        }
      }

      const { data } = await axios.put(`/teacher/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (data) {
        Notify.success('Дані успішно змінені');
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

export const deleteTeacherById = createAsyncThunk(
  'teacher/delete',
  async (id, thunkAPI) => {
    try {
      const res = await axios.patch(`teacher/delete/${id}`);
      if (res) {
        Notify.success('Фахівець видалений зі списку!');
      }
    } catch (err) {
      if (err) {
        Notify.failure(err.message);
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
