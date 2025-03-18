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
      if (err) {
        Notify.failure(err.response.data.message);
      }
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
      if (err) {
        Notify.failure(err.response.data.message);
      }
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
        Notify.success('Дитина успішно додана в список!');
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
        Notify.failure(err.response.data.message);
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const downloadFile = createAsyncThunk(
  'child/downloadFile',
  async (fileName, thunkAPI) => {
    try {
      // Добавляем обработку кодировки имени файла
      const encodedFileName = encodeURIComponent(fileName);
      const response = await axios.get(`/child/files/${encodedFileName}`, {
        responseType: 'blob',
      });

      const contentType = response.headers['content-type'];
      const blob = new Blob([response.data], { type: contentType });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      return { success: true, fileName };
    } catch (err) {
      if (err) {
        Notify.failure('Помилка завантаження файлу');
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const uploadFile = createAsyncThunk(
  'child/uploadFile',
  async ({ file, childId }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const { data } = await axios.post(
        `/child/files/upload/${childId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (data) {
        Notify.success('Файл успішно завантажено');
      }
      return data;
    } catch (err) {
      if (err) {
        Notify.failure('Помилка завантаження файлу');
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteFile = createAsyncThunk(
  'child/deleteFile',
  async ({ fileName, childId }, thunkAPI) => {
    console.log('🚀 ~ childId:', childId);
    console.log('🚀 ~ fileName:', fileName);
    try {
      await axios.delete(`/child/files/${fileName}/${childId}`);
      Notify.success('Файл успішно видалено');
      return fileName;
    } catch (err) {
      if (err) {
        Notify.failure('Помилка видалення файлу');
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
