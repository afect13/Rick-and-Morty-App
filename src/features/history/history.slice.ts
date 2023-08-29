import { createSlice } from '@reduxjs/toolkit';

import {
  addedCurrentLink,
  addedHistoryLink,
  removeAllHistoryLink,
  removeHistoryLink,
  resetHisoryStore,
  updateHistoryState,
} from './history.actions';

interface HistoryState {
  history: string[];
  isLoading: boolean;
  error: string | undefined;
  isLoadingByLink: string | null;
}
const initialState: HistoryState = {
  history: [],
  isLoading: false,
  error: undefined,
  isLoadingByLink: null,
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addedHistoryLink.pending, (state) => {
        state.error = undefined;
      })
      .addCase(addedHistoryLink.rejected, (state, action) => {
        state.error = action.error.code;
      })
      .addCase(removeHistoryLink.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(removeHistoryLink.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.code;
      })
      .addCase(removeAllHistoryLink.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(removeAllHistoryLink.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.code;
      })
      .addCase(updateHistoryState.pending, (state) => {
        state.error = undefined;
      })
      .addCase(updateHistoryState.fulfilled, (state, action) => {
        state.isLoading = false;
        state.history = action.payload;
        state.isLoadingByLink = null;
      })
      .addCase(updateHistoryState.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.code;
      })
      .addCase(addedCurrentLink, (state, action) => {
        state.isLoadingByLink = action.payload.target;
        state.isLoading = true;
      })
      .addCase(resetHisoryStore, (state, action) => {
        state.history = action.payload;
      });
  },
});
