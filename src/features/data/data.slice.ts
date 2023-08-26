import { createSlice } from '@reduxjs/toolkit';

import { getData, initData, mutationData } from './data.actions';

interface DataState {
  favorites: string[];
  history: string[];
  isLoading: boolean;
  error: string | undefined;
}
const initialState: DataState = {
  favorites: [],
  history: [],
  isLoading: false,
  error: undefined,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(initData.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(initData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.code;
      })
      .addCase(getData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorites = action.payload?.favorites;
        state.history = action.payload?.history;
      })
      .addCase(getData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.code;
      })
      .addCase(mutationData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(mutationData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.code;
      });
  },
});
