import {
  correctionLessons,
  deleteLogopedLessonById,
  deletePreschoolInclusionLessonById,
  deletePreschoolLessonById,
  deleteSensornayaLessonById,
  deleteСorrectionLessonById,
  logopedLessons,
  preschoolInclusionLessons,
  preschoolLessons,
  sensornayaLessons,
} from './officesOperetion';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  lessonsSensornaya: [],
  lessonsLogoped: [],
  lessonsСorrection: [],
  lessonsPreschool: [],
  preschoolInclusion: [],
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
      .addCase(correctionLessons.pending, state => {
        state.isloading = true;
        state.operetion = 'sensornayaLessons';
      })
      .addCase(correctionLessons.fulfilled, (state, { payload }) => {
        state.isloading = false;
        state.operetion = null;
        state.error = null;
        state.lessonsСorrection = payload;
      })
      .addCase(correctionLessons.rejected, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = action.payload;
      })
      .addCase(preschoolLessons.pending, state => {
        state.isloading = true;
        state.operetion = 'sensornayaLessons';
      })
      .addCase(preschoolLessons.fulfilled, (state, { payload }) => {
        state.isloading = false;
        state.operetion = null;
        state.error = null;
        state.lessonsPreschool = payload;
      })
      .addCase(preschoolLessons.rejected, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = action.payload;
      })
      .addCase(preschoolInclusionLessons.pending, state => {
        state.isloading = true;
        state.operetion = 'sensornayaLessons';
      })
      .addCase(preschoolInclusionLessons.fulfilled, (state, { payload }) => {
        state.isloading = false;
        state.operetion = null;
        state.error = null;
        state.preschoolInclusion = payload;
      })
      .addCase(preschoolInclusionLessons.rejected, (state, action) => {
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
      })
      .addCase(deleteСorrectionLessonById.pending, (state, { meta }) => {
        state.operetion = `${meta.arg}`;
        state.isloading = true;
      })
      .addCase(deleteСorrectionLessonById.fulfilled, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = null;
        const id = action.meta.arg;
        const indexLesson = state.lessonsСorrection.findIndex(
          vel => vel._id === id
        );
        if (indexLesson !== -1) {
          state.lessonsСorrection.splice(indexLesson, 1);
        }
      })
      .addCase(deleteСorrectionLessonById.rejected, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(deletePreschoolLessonById.pending, (state, { meta }) => {
        state.operetion = `${meta.arg}`;
        state.isloading = true;
      })
      .addCase(deletePreschoolLessonById.fulfilled, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = null;
        const id = action.meta.arg;
        const indexLesson = state.lessonsPreschool.findIndex(
          vel => vel._id === id
        );
        if (indexLesson !== -1) {
          state.lessonsPreschool.splice(indexLesson, 1);
        }
      })
      .addCase(deletePreschoolLessonById.rejected, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(
        deletePreschoolInclusionLessonById.pending,
        (state, { meta }) => {
          state.operetion = `${meta.arg}`;
          state.isloading = true;
        }
      )
      .addCase(
        deletePreschoolInclusionLessonById.fulfilled,
        (state, action) => {
          state.operetion = null;
          state.isloading = false;
          state.error = null;
          const id = action.meta.arg;
          const indexLesson = state.preschoolInclusion.findIndex(
            vel => vel._id === id
          );
          if (indexLesson !== -1) {
            state.preschoolInclusion.splice(indexLesson, 1);
          }
        }
      )
      .addCase(deletePreschoolInclusionLessonById.rejected, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export const officesReducer = officesSlice.reducer;
