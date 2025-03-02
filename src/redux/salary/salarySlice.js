import {
  deleteSalaryById,
  getSalarisByDate,
  getSalaryById,
  updateSalary,
} from './salaryOperetion';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  salaryPeriod: [],
  salarySelected: null,
  isloading: false,
  salaryStatus: '',
  operetion: null,
  error: null,
};

const salarySlice = createSlice({
  name: 'salary',
  initialState,
  reducers: {
    clearSalarySelected: state => {
      state.salarySelected = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getSalarisByDate.pending, state => {
        state.isloading = true;
        state.salaryStatus = '';
      })
      .addCase(getSalarisByDate.fulfilled, (state, { payload }) => {
        state.isloading = false;
        state.salaryStatus = 'salary_by_period';
        state.error = null;
        state.salaryPeriod = payload;
      })
      //   .addCase(createZvitSelectedPeriod.pending, state => {
      //     state.zvitStatus = '';
      //   })
      .addCase(getSalarisByDate.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(updateSalary.pending, state => {
        state.isloading = true;
        state.operetion = 'updateSalary';
      })
      .addCase(updateSalary.fulfilled, (state, { payload }) => {
        state.isloading = false;
        state.operetion = null;
        state.error = null;
        const id = payload._id;
        const index = state.salaryPeriod?.findIndex(vel => vel._id === id);
        if (index !== -1) {
          state.salaryPeriod[index] = payload;
        }
      })
      .addCase(updateSalary.rejected, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = action.payload;
      })
      .addCase(getSalaryById.pending, state => {
        state.isloading = true;
      })
      .addCase(getSalaryById.fulfilled, (state, { payload }) => {
        state.isloading = false;
        state.error = null;
        state.salarySelected = payload;
      })
      .addCase(getSalaryById.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(deleteSalaryById.pending, (state, { meta }) => {
        state.operetion = `${meta.arg}`;
        state.isloading = true;
      })
      .addCase(deleteSalaryById.fulfilled, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = null;
        const id = action.meta.arg;
        const index = state.salaryPeriod.findIndex(vel => vel._id === id);
        if (index !== -1) {
          state.salaryPeriod.splice(index, 1);
        }
      })
      .addCase(deleteSalaryById.rejected, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export const salaryReducer = salarySlice.reducer;
export const { clearSalarySelected } = salarySlice.actions;
