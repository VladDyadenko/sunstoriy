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
  allLessons: [], // Додано новий стан для всіх уроків
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
        if (meta.arg.offices?.length > 1) {
          state.operetion = 'allLessons';
        }
        state.operetion = 'choseLesson';
      })
      .addCase(
        selectedLessonsByDateTeacher.fulfilled,
        (state, { payload, meta }) => {
          state.isloading = false;
          state.operetion = null;
          state.error = null;

          const offices = meta.arg.offices;
          if (offices?.length > 1) {
            state.allLessons = payload && payload.length > 0 ? payload : [];
          } else {
            const requestedOffice = offices[0];
            const stateKey = officeMap[requestedOffice];

            if (payload && payload.length > 0) {
              state[stateKey] = payload;
            } else {
              state[stateKey] = [];
            }
          }
        }
      )

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
        state[stateKey] = state[stateKey].filter(lesson => lesson._id !== id);
      })

      .addCase(deleteLessonByOfficeAndId.rejected, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export const officesReducer = officesSlice.reducer;
