import { createSlice } from '@reduxjs/toolkit';

import {
  addToHistory,
  removeAllFromHistory,
  removeFromHistory,
  resetHisoryStore,
  updateHistoryState,
} from '../../features';

type HistoryState = {
  history: string[];
  error: string | undefined;
};
const initialState: HistoryState = {
  history: [],
  error: undefined,
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToHistory.pending, (state) => {
        state.error = undefined;
      })
      .addCase(addToHistory.rejected, (state, action) => {
        state.error = action.error.code;
      })
      .addCase(removeFromHistory.pending, (state) => {
        state.error = undefined;
      })
      .addCase(removeFromHistory.rejected, (state, action) => {
        state.error = action.error.code;
      })
      .addCase(removeAllFromHistory.pending, (state) => {
        state.error = undefined;
      })
      .addCase(removeAllFromHistory.rejected, (state, action) => {
        state.error = action.error.code;
      })
      .addCase(updateHistoryState.pending, (state) => {
        state.error = undefined;
      })
      .addCase(updateHistoryState.fulfilled, (state, action) => {
        state.history = action.payload;
      })
      .addCase(updateHistoryState.rejected, (state, action) => {
        state.error = action.error.code;
      })
      .addCase(resetHisoryStore, (state, action) => {
        state.history = action.payload;
        state.error = undefined;
      });
  },
});
