import {
  addLesson,
  choseLessonGraph,
  deleteLessonById,
  fetchLessons,
  updateLesson,
} from './lessonOperetion';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  lesson: [],
  choseLesson: [],
  updateLesson: [],
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
      })
      .addCase(updateLesson.pending, state => {
        state.isloading = true;
      })
      .addCase(updateLesson.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.updateLesson.push(action.payload);
      })
      .addCase(updateLesson.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(choseLessonGraph.pending, state => {
        state.isloading = true;
      })
      .addCase(choseLessonGraph.fulfilled, (state, { payload }) => {
        state.isloading = false;
        state.error = null;
        state.choseLesson = payload;
      })
      .addCase(choseLessonGraph.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(deleteLessonById.pending, (state, { meta }) => {
        state.operetion = `${meta.arg}`;
        state.isloading = true;
      })
      .addCase(deleteLessonById.fulfilled, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = null;
        const id = action.meta.arg;
        const index = state.lesson.findIndex(vel => vel._id === id);
        if (index !== -1) {
          state.lesson.splice(index, 1);
        }
      })
      .addCase(deleteLessonById.rejected, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export const lessonReducer = lessonSlice.reducer;
