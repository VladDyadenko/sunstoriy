import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosWithAuth } from 'api/api.interceptors';
import { Notify } from 'notiflix';

export const fetchLessons = createAsyncThunk('lessons', async (_, thunkAPI) => {
  try {
    const { data } = await axiosWithAuth.get('/lesson');
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const addPayment = createAsyncThunk(
  'lesson/addPayment',
  async (combinedData, thunkAPI) => {
    const { id, values } = combinedData;
    try {
      const { data } = await axiosWithAuth.post(
        `/lesson/${id}/payment`,
        values,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (data) {
        Notify.success('Оплата успішно додана');
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

export const updatePayment = createAsyncThunk(
  'lesson/updatePayment',
  async (combinedData, thunkAPI) => {
    const { lessonId, paymentId, values } = combinedData;
    try {
      const { data } = await axiosWithAuth.patch(
        `/lesson/${lessonId}/payment/${paymentId}`,
        values,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (data) {
        Notify.success('Оплата змінена');
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
export const deletePayment = createAsyncThunk(
  'lesson/deletePayment',
  async (combinedData, thunkAPI) => {
    const { lessonId, paymentId } = combinedData;
    try {
      const { data } = await axiosWithAuth.delete(
        `/lesson/${lessonId}/payment/${paymentId}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (data) {
        Notify.success('Платіж видалений');
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

export const addLesson = createAsyncThunk(
  'lesson/addLesson',
  async (lessonData, thunkAPI) => {
    try {
      const { data } = await axiosWithAuth.post('/lesson', lessonData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (data.length > 0) {
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
      const { data } = await axiosWithAuth.put(`/lesson/${id}`, values, {
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

export const deleteLessonById = createAsyncThunk(
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
