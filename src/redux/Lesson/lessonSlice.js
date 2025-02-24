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
  lessonsSensornaya: [],
  isloading: false,
  marker: null,
  operetion: null,
  error: null,
  islessonStatus: null,
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
        state.operetion = 'addLesson';
      })
      .addCase(addLesson.fulfilled, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = null;
        state.lesson.push(action.payload);
      })
      .addCase(addLesson.rejected, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = action.payload;
      })
      .addCase(updateLesson.pending, state => {
        state.isloading = true;
        state.operetion = 'addLesson';
        state.islessonStatus = null;
      })
      .addCase(updateLesson.fulfilled, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = null;
        const id = action.payload._id;
        const indexLesson = state.lesson.findIndex(vel => vel._id === id);
        if (indexLesson !== -1) {
          state.lesson[indexLesson] = action.payload;
        }

        if (action?.payload?.paymentForm) {
          state.islessonStatus = action.payload._id;
        }

        if (action?.payload?.isHappend) {
          state.islessonStatus = action.payload._id;
        }
      })
      .addCase(updateLesson.rejected, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.islessonStatus = null;
        state.error = action.payload;
      })
      .addCase(choseLessonGraph.pending, state => {
        state.isloading = true;
        state.operetion = 'choseLesson';
      })
      .addCase(choseLessonGraph.fulfilled, (state, { payload }) => {
        state.isloading = false;
        state.operetion = null;
        state.error = null;
        state.choseLesson = payload;
      })
      .addCase(choseLessonGraph.rejected, (state, action) => {
        state.isloading = false;
        state.operetion = null;
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
        const indexLesson = state.lesson.findIndex(vel => vel._id === id);
        if (indexLesson !== -1) {
          state.lesson.splice(indexLesson, 1);
        }
        state.choseLesson = state.choseLesson.filter(
          lesson => lesson._id !== action.meta.arg
        );
      })
      .addCase(deleteLessonById.rejected, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export const lessonReducer = lessonSlice.reducer;
