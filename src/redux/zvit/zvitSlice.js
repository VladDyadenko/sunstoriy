import { createZvitSelectedPeriod } from './zvitOperetion';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  zvitSelectedPeriod: {},
  isloading: false,
  operetion: null,
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
      })
      .addCase(createZvitSelectedPeriod.fulfilled, (state, action) => {
        state.isloading = false;
        state.operetion = 'createZvit';
        state.error = null;
        state.zvitSelectedPeriod = action.payload;
      })
      .addCase(createZvitSelectedPeriod.rejected, (state, action) => {
        state.isloading = false;
        state.operetion = null;
        state.error = action.payload;
      });
  },
});

export const zvitReducer = zvitSlice.reducer;
