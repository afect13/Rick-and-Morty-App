import { createSlice } from '@reduxjs/toolkit';

import { signin, signout, signup } from './auth.actions';

interface AuthState {
  accessToken: string | null;
  isAuthenticated: boolean;
  email: string | null;
  isLoading: boolean;
  error: string | undefined;
}
const initialState: AuthState = {
  accessToken: null,
  email: null,
  isAuthenticated: false,
  isLoading: false,
  error: undefined,
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
        state.accessToken = action.payload.accessToken;
        state.email = action.payload.email;
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
        state.accessToken = action.payload.accessToken;
        state.email = action.payload.email;
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
        state.accessToken = action.payload.accessToken;
        state.email = action.payload.email;
        state.isAuthenticated = false;
      })
      .addCase(signout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.code;
      });
  },
});
