import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

export const addChild = createAsyncThunk(
  'child/addChildren',
  async (childData, thunkAPI) => {
    try {
      const formData = new FormData();

      for (const key in childData) {
        const value = childData[key];

        if (Array.isArray(value)) {
          for (const file of value) {
            formData.append(key, file, file.name);
          }
        } else if (value !== '') {
          formData.append(key, value);
        }
      }

      const { data } = await axios.post('/child', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (data) {
        Notify.success('Child successful addad');
      }
      return data;
    } catch (err) {
      if (err) {
        Notify.failure('Not found');
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const updateChild = createAsyncThunk(
  'child/updateChild',
  async (childData, thunkAPI) => {
    try {
      const { id, values } = childData;

      const formData = new FormData();

      for (const key in values) {
        const value = values[key];

        if (Array.isArray(value)) {
          for (const file of value) {
            formData.append(key, file, file.name);
          }
        } else if (value !== '') {
          formData.append(key, value);
        }
      }

      const { data } = await axios.put(`/child/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (data) {
        Notify.success('Child successful update');
      }
      return data;
    } catch (err) {
      if (err) {
        Notify.failure('Not found');
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
