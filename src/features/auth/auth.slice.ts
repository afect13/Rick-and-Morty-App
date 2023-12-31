import { createSlice } from '@reduxjs/toolkit';

import { clearError, setAuthParams, setCheckPassed, signin, signout, signup } from './auth.actions';

type AuthState = {
  isAuthenticated: boolean;
  email: string | null;
  isLoading: boolean;
  error: string | undefined;
  checkIsPassed: boolean;
};
const initialState: AuthState = {
  email: null,
  isAuthenticated: false,
  isLoading: false,
  error: undefined,
  checkIsPassed: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.email = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.code;
      })
      .addCase(signin.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.email = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(signin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.code;
      })
      .addCase(signout.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(signout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.email = action.payload;
        state.isAuthenticated = false;
      })
      .addCase(signout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.code;
      })
      .addCase(clearError, (state, action) => {
        state.error = action.payload;
      })
      .addCase(setAuthParams, (state, action) => {
        state.isAuthenticated = action.payload.authIs;
        state.email = action.payload.email;
      })
      .addCase(setCheckPassed, (state, action) => {
        state.checkIsPassed = action.payload;
      });
  },
});
