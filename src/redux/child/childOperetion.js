import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

export const fetchChildren = createAsyncThunk(
  'children',
  async (page, thunkAPI) => {
    try {
      const { data } = await axios.get(`/child?page=${page}`);

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const fetchChildrenByName = createAsyncThunk(
  'child/getChildByName',
  async (searchData, thunkAPI) => {
    try {
      const { data } = await axios.get(`/child/search?query=${searchData}`);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

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
        Notify.success('Дитина успішно збережена!');
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

export const deleteChildById = createAsyncThunk(
  'child/delete',
  async (id, thunkAPI) => {
    try {
      const res = await axios.patch(`child/delete/${id}`);
      if (res) {
        Notify.success('Дитина видалена зі списку!');
      }
      return res.data;
    } catch (err) {
      if (err) {
        Notify.failure(err.message);
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
