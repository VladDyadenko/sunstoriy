const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  name: '',
  surname: '',
  birthDate: '',
  age: '',
  childImage: null,
  mather: '',
  matherPhone: '',
  father: '',
  fatherPhone: '',
  childFiles: null,
  about: '',
  sensornaya: '',
  logoped: '',
  correction: '',
  tutor: '',
  rehabilitation: '',
};

const childrenSlice = createSlice({
  name: 'children',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export const childrenReducer = childrenSlice.reducer;
