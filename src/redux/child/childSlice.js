import {
  addChild,
  deleteChildById,
  fetchChildren,
  updateChild,
} from './childOperetion';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  child: [],
  pagination: {
    page: null,
    count: null,
    pageCount: null,
  },
  operetion: null,
  marker: null,
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
        state.marker = null;
        state.operetion = 'fatchChild';
        state.isloading = true;
      })
      .addCase(fetchChildren.fulfilled, (state, action) => {
        state.marker = 'fetchChildComplit';
        state.operetion = null;
        state.isloading = false;
        state.error = null;
        state.child = action.payload.children;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchChildren.rejected, (state, action) => {
        state.marker = null;
        state.operetion = null;
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(addChild.pending, state => {
        state.operetion = 'addChild';
        state.isloading = true;
      })
      .addCase(addChild.fulfilled, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = null;
        state.child.push(action.payload);
      })
      .addCase(addChild.rejected, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(updateChild.pending, state => {
        state.operetion = 'updateChild';
        state.isloading = true;
      })
      .addCase(updateChild.fulfilled, (state, action) => {
        state.operetion = 'updateChild';
        state.isloading = false;
        state.error = null;
        const id = action.payload._id;
        const index = state.child.findIndex(vel => vel._id === id);
        if (index !== -1) {
          state.child[index] = action.payload;
        }
      })
      .addCase(updateChild.rejected, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(deleteChildById.pending, (state, { meta }) => {
        state.operetion = `${meta.arg}`;
        state.isloading = true;
      })
      .addCase(deleteChildById.fulfilled, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = null;
        const id = action.meta.arg;
        const index = state.child.findIndex(vel => vel._id === id);
        if (index !== -1) {
          state.child.splice(index, 1);
        }
        state.pagination.count = action.payload.pagination.count;
        state.pagination.pageCount = action.payload.pagination.pageCount;
      })
      .addCase(deleteChildById.rejected, (state, action) => {
        state.operetion = null;
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export const childrenReducer = childrenSlice.reducer;
