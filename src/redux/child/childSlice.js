import {
  addChild,
  deleteChildById,
  fetchChildren,
  updateChild,
} from './childOperetion';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  child: [],
  isloading: false,
  error: null,
};

const childrenSlice = createSlice({
  name: 'children',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchChildren.pending, state => {
        state.isloading = true;
      })
      .addCase(fetchChildren.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.child = action.payload;
      })
      .addCase(fetchChildren.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(addChild.pending, state => {
        state.isloading = true;
      })
      .addCase(addChild.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.child.push(action.payload);
      })
      .addCase(addChild.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(updateChild.pending, state => {
        state.isloading = true;
      })
      .addCase(updateChild.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        const id = action.payload._id;
        const index = state.child.findIndex(vel => vel._id === id);
        console.log(index);
        console.log(id);
        if (index !== -1) {
          state.child[index] = action.payload;
        }
      })
      .addCase(updateChild.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(deleteChildById.pending, state => {
        state.isloading = true;
      })
      .addCase(deleteChildById.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        const id = action.meta.arg;
        const index = state.child.findIndex(vel => vel._id === id);
        if (index !== -1) {
          state.child.splice(index, 1);
        }
      })
      .addCase(deleteChildById.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export const childrenReducer = childrenSlice.reducer;
