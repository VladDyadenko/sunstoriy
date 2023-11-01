import { addLesson, fetchLessons } from './lessonOperetion';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  lesson: [],
  isloading: false,
  marker: null,
  operetion: null,
  error: null,
};

const lessonSlice = createSlice({
  name: 'lesson',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchLessons.pending, state => {
        state.isloading = true;
      })
      .addCase(fetchLessons.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.lesson = action.payload;
      })
      .addCase(fetchLessons.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(addLesson.pending, state => {
        state.isloading = true;
      })
      .addCase(addLesson.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.lesson.push(action.payload);
      })
      .addCase(addLesson.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export const lessonReducer = lessonSlice.reducer;
