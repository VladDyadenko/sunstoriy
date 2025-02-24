import { getExpensesByDate } from 'redux/expense/expenseOperetion';
import {
  createZvitSelectedPeriod,
  getZvitChildByIdAndPeriod,
  getZvitChildrensPeriod,
} from './zvitOperetion';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  zvitSelectedPeriod: {},
  childrensSelected: [],
  selectedChildData: null,
  isloading: false,
  isloadingChildrens: false,
  isloadingChild: false,
  operetion: null,
  zvitStatus: '',
  error: null,
};

const zvitSlice = createSlice({
  name: 'zvit',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createZvitSelectedPeriod.pending, state => {
        state.isloading = true;
        state.operetion = null;
        state.zvitStatus = '';
      })
      .addCase(createZvitSelectedPeriod.fulfilled, (state, action) => {
        state.isloading = false;
        state.operetion = 'createZvit';
        state.zvitStatus = 'report_for_period';
        state.error = null;
        state.zvitSelectedPeriod = action.payload;
      })
      .addCase(getExpensesByDate.pending, state => {
        state.zvitStatus = ''; // Очистка при створенні звіту
      })
      .addCase(createZvitSelectedPeriod.rejected, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = action.payload;
      })
      .addCase(getZvitChildrensPeriod.pending, state => {
        state.isloadingChildrens = true;
        state.operetion = null;
      })
      .addCase(getZvitChildrensPeriod.fulfilled, (state, { payload }) => {
        state.isloadingChildrens = false;
        state.operetion = 'createChildrensZvit';
        state.error = null;
        state.childrensSelected = payload.totalData;
      })
      .addCase(getZvitChildrensPeriod.rejected, (state, action) => {
        state.isloadingChildrens = false;
        state.operetion = null;
        state.error = action.payload;
      })
      .addCase(getZvitChildByIdAndPeriod.pending, state => {
        state.isloadingChild = true;
        state.operetion = null;
      })
      .addCase(getZvitChildByIdAndPeriod.fulfilled, (state, { payload }) => {
        state.isloadingChild = false;
        state.operetion = 'createChildZvit';
        state.error = null;
        const { totalData } = payload;
        state.selectedChildData = totalData;
      })
      .addCase(getZvitChildByIdAndPeriod.rejected, (state, action) => {
        state.isloadingChild = false;
        state.operetion = null;
        state.error = action.payload;
      });
  },
});

export const zvitReducer = zvitSlice.reducer;
