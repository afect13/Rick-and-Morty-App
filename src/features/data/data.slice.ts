import { createSlice } from '@reduxjs/toolkit';

import { addedTarget, clearSpecificArray, getData, initData, mutationData } from './data.actions';

interface DataState {
  favorites: number[];
  history: string[];
  isLoading: boolean;
  error: string | undefined;
  target: number | string | null;
  isAllRemove: boolean;
}
const initialState: DataState = {
  favorites: [],
  history: [],
  isLoading: false,
  error: undefined,
  target: null,
  isAllRemove: false,
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
        state.target = null;
        state.isAllRemove = false;
      })
      .addCase(getData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.code;
      })
      .addCase(mutationData.pending, (state) => {
        state.error = undefined;
      })
      .addCase(mutationData.rejected, (state, action) => {
        state.error = action.error.code;
      })
      .addCase(clearSpecificArray.pending, (state) => {
        state.isAllRemove = true;
        state.error = undefined;
      })
      .addCase(clearSpecificArray.rejected, (state, action) => {
        state.isAllRemove = false;
        state.error = action.error.code;
      })
      .addCase(addedTarget, (state, action) => {
        state.target = action.payload.target;
      });
  },
});
