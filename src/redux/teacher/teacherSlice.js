import {
  addTeacher,
  deleteTeacherById,
  fetchTeachers,
} from './teacherOperetion';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  teacher: [],
  isloading: false,
  error: null,
};

const teacherSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTeachers.pending, state => {
        state.isloading = true;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.teacher = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(addTeacher.pending, state => {
        state.isloading = true;
      })
      .addCase(addTeacher.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.teacher.push(action.payload);
      })
      .addCase(addTeacher.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(deleteTeacherById.pending, state => {
        state.isloading = true;
      })
      .addCase(deleteTeacherById.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        const id = action.meta.arg;
        const index = state.teacher.findIndex(vel => vel._id === id);
        console.log(index);
        if (index !== -1) {
          state.teacher.splice(index, 1);
        }
      })
      .addCase(deleteTeacherById.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export const teachersReducer = teacherSlice.reducer;
