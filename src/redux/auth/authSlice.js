import { createSlice } from '@reduxjs/toolkit';
import {
  registerThunk,
  signinThunk,
  logoutThunk,
  currentThunk,
  updateNameThunk,
  refreshTokensThunk,
  googleAuthSuccess,
} from './authOperetion';

const initialState = {
  user: {
    name: null,
    email: null,
    avatarUrl: null,
    children: null,
    lessons: null,
    createdAt: null,
  },
  token: null,
  isRefreshing: false,
  isLoading: false,
  error: null,
  operetion: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
    setOperetion: (state, action) => {
      state.operetion = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      // Register
      .addCase(registerThunk.pending, state => {
        state.isLoading = true;
        state.operetion = 'registration';
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
        state.error = null;
        state.operetion = null;
      })
      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.operetion = null;
      })

      // Login
      .addCase(signinThunk.pending, state => {
        state.isLoading = true;
        state.operetion = 'login';
      })
      .addCase(signinThunk.fulfilled, (state, { payload }) => {
        state.token = payload.accessToken;
        state.isLoading = false;
        state.error = null;
        state.operetion = null;
      })
      .addCase(signinThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.operetion = null;
      })

      // Logout
      .addCase(logoutThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.user = initialState.user;
        state.token = null;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logoutThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      // Current User
      .addCase(currentThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(currentThunk.fulfilled, (state, { payload, meta }) => {
        state.user = payload;
        // Если токен был передан в meta.arg, используем его
        if (meta.arg) {
          state.token = meta.arg;
        }
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(currentThunk.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })

      // Update Name/Avatar
      .addCase(updateNameThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateNameThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateNameThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      // Refresh Tokens
      .addCase(refreshTokensThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshTokensThunk.fulfilled, (state, { payload }) => {
        state.token = payload.accessToken;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshTokensThunk.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
        state.token = null;
        state.user = initialState.user;
      })

      // Google Auth
      .addCase(googleAuthSuccess.pending, state => {
        state.isLoading = true;
      })
      .addCase(googleAuthSuccess.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.accessToken;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(googleAuthSuccess.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { clearError, setOperetion } = authSlice.actions;
