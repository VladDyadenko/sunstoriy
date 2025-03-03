import {
  deleteLessonByOfficeAndId,
  selectedLessonsByDateTeacher,
} from './officesOperetion';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  lessonsSensornaya: [],
  lessonsLogoped: [],
  lessonsСorrection: [],
  lessonsPreschool: [],
  lessonsMassage: [],
  lessonsDiagnostika: [],
  preschoolInclusion: [],
  isloading: false,
  marker: null,
  operetion: null,
  error: null,
};
const officeMap = {
  Сенсорна: 'lessonsSensornaya',
  Логопед: 'lessonsLogoped',
  Корекційний: 'lessonsСorrection',
  Preschool: 'lessonsPreschool',
  'Preschool-інклюзія': 'preschoolInclusion',
  Реабілітолог: 'lessonsMassage',
  Діагностика: 'lessonsDiagnostika',
};
const officesSlice = createSlice({
  name: 'offices',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(selectedLessonsByDateTeacher.pending, (state, { meta }) => {
        state.isloading = true;
        state.operetion = meta.arg.offices;
      })
      .addCase(selectedLessonsByDateTeacher.fulfilled, (state, { payload }) => {
        state.isloading = false;
        state.operetion = null;
        state.error = null;

        if (payload && payload.length > 0) {
          const office = payload[0].office;
          const stateKey = officeMap[office];
          if (stateKey) {
            state[stateKey] = payload;
          }
        }
      })
      .addCase(selectedLessonsByDateTeacher.rejected, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = action.payload;
      })
      .addCase(deleteLessonByOfficeAndId.pending, (state, { meta }) => {
        state.operetion = `${meta.arg}`;
        state.isloading = true;
      })
      .addCase(deleteLessonByOfficeAndId.fulfilled, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = null;
        const id = action.meta.arg;
        const currentOffice = action.payload;
        const stateKey = officeMap[currentOffice];

        if (stateKey) {
          state[stateKey] = state[stateKey].filter(lesson => lesson._id !== id);
        }
      })
      .addCase(deleteLessonByOfficeAndId.rejected, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export const officesReducer = officesSlice.reducer;
