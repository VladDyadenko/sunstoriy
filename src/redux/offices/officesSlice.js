import {
  deleteLogopedLessonById,
  deleteSensornayaLessonById,
  logopedLessons,
  sensornayaLessons,
} from './officesOperetion';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  lessonsSensornaya: [],
  lessonsLogoped: [],
  isloading: false,
  marker: null,
  operetion: null,
  error: null,
};

const officesSlice = createSlice({
  name: 'offices',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(sensornayaLessons.pending, state => {
        state.isloading = true;
        state.operetion = 'sensornayaLessons';
      })
      .addCase(sensornayaLessons.fulfilled, (state, { payload }) => {
        state.isloading = false;
        state.operetion = null;
        state.error = null;
        state.lessonsSensornaya = payload;
      })
      .addCase(sensornayaLessons.rejected, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = action.payload;
      })
      .addCase(logopedLessons.pending, state => {
        state.isloading = true;
        state.operetion = 'sensornayaLessons';
      })
      .addCase(logopedLessons.fulfilled, (state, { payload }) => {
        state.isloading = false;
        state.operetion = null;
        state.error = null;
        state.lessonsLogoped = payload;
      })
      .addCase(logopedLessons.rejected, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = action.payload;
      })
      .addCase(deleteSensornayaLessonById.pending, (state, { meta }) => {
        state.operetion = `${meta.arg}`;
        state.isloading = true;
      })
      .addCase(deleteSensornayaLessonById.fulfilled, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = null;
        const id = action.meta.arg;
        const indexLesson = state.lessonsSensornaya.findIndex(
          vel => vel._id === id
        );
        if (indexLesson !== -1) {
          state.lessonsSensornaya.splice(indexLesson, 1);
        }
      })
      .addCase(deleteSensornayaLessonById.rejected, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(deleteLogopedLessonById.pending, (state, { meta }) => {
        state.operetion = `${meta.arg}`;
        state.isloading = true;
      })
      .addCase(deleteLogopedLessonById.fulfilled, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = null;
        const id = action.meta.arg;
        const indexLesson = state.lessonsLogoped.findIndex(
          vel => vel._id === id
        );
        if (indexLesson !== -1) {
          state.lessonsLogoped.splice(indexLesson, 1);
        }
      })
      .addCase(deleteLogopedLessonById.rejected, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export const officesReducer = officesSlice.reducer;
