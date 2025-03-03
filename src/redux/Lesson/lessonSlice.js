import {
  addLesson,
  addPayment,
  choseLessonGraph,
  deleteLessonById,
  deletePayment,
  updateLesson,
  updatePayment,
} from './lessonOperetion';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  lesson: [],
  choseLesson: [],
  lessonsSensornaya: [],
  isloading: false,
  marker: null,
  operetion: null,
  operetionPayment: null,
  error: null,
  islessonStatus: null,
};

const lessonSlice = createSlice({
  name: 'lesson',
  initialState,
  reducers: {
    creatPaymentOperetion: state => {
      state.operetionPayment = 'addPayment';
    },
    clearPaymentOperetion: state => {
      state.operetionPayment = null;
    },
  },
  extraReducers: builder => {
    builder
      // .addCase(fetchLessons.pending, state => {
      //   state.isloading = true;
      // })
      // .addCase(fetchLessons.fulfilled, (state, action) => {
      //   state.isloading = false;
      //   state.error = null;
      //   state.lesson = action.payload;
      // })
      // .addCase(fetchLessons.rejected, (state, action) => {
      //   state.isloading = false;
      //   state.error = action.payload;
      // })
      .addCase(addLesson.pending, state => {
        state.isloading = true;
        state.operetion = 'addLesson';
      })
      .addCase(addLesson.fulfilled, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = null;
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
        // const id = action.payload._id;
        // const indexLesson = state.lesson.findIndex(vel => vel._id === id);
        // if (indexLesson !== -1) {
        //   state.lesson[indexLesson] = action.payload;
        // }

        if (action?.payload?.paymentForm || action?.payload?.isHappend) {
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

        state.choseLesson = state.choseLesson.filter(
          lesson => lesson._id !== action.meta.arg
        );
      })
      .addCase(deleteLessonById.rejected, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = action.payload;
      }) // Логіка для addPayment
      .addCase(addPayment.pending, state => {
        state.isloading = true;
        state.operetion = 'addPayment';
      })
      .addCase(addPayment.fulfilled, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = null;
        const lessonId = action.meta.arg.id;
        state.islessonStatus = lessonId;
      })
      .addCase(addPayment.rejected, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = action.payload;
      })

      // Логіка для updatePayment
      .addCase(updatePayment.pending, state => {
        state.isloading = true;
        state.operetion = 'updatePayment';
      })
      .addCase(updatePayment.fulfilled, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = null;
        const lessonId = action.meta.arg.lessonId;
        state.islessonStatus = lessonId;
      })
      .addCase(updatePayment.rejected, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = action.payload;
      })

      // Логіка для deletePayment
      .addCase(deletePayment.pending, state => {
        state.isloading = true;
        state.operetion = 'deletePayment';
      })
      .addCase(deletePayment.fulfilled, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = null;
        const lessonId = action.meta.arg.lessonId;
        const updatedLesson = action.payload;
        const indexLesson = state.lesson.findIndex(
          lesson => lesson._id === lessonId
        );
        if (indexLesson !== -1) {
          state.lesson[indexLesson] = updatedLesson;
        }
      })
      .addCase(deletePayment.rejected, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = action.payload;
      });
  },
});

export const lessonReducer = lessonSlice.reducer;
export const { creatPaymentOperetion, clearPaymentOperetion } =
  lessonSlice.actions;
