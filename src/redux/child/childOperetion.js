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
            const utf8FileName = new TextEncoder().encode(file.name);
            const utf8FileNameBlob = new Blob([utf8FileName]);
            formData.append(key, utf8FileNameBlob, file.name);
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
