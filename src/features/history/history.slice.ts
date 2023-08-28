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
  currentBtn: string | null;
  AllRemoveBtn: boolean;
}
const initialState: HistoryState = {
  history: [],
  isLoading: false,
  error: undefined,
  currentBtn: null,
  AllRemoveBtn: false,
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addedHistoryLink.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(addedHistoryLink.rejected, (state, action) => {
        state.isLoading = false;
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
        state.AllRemoveBtn = true;
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(removeAllHistoryLink.rejected, (state, action) => {
        state.AllRemoveBtn = false;
        state.isLoading = false;
        state.error = action.error.code;
      })
      .addCase(updateHistoryState.pending, (state) => {
        state.error = undefined;
      })
      .addCase(updateHistoryState.fulfilled, (state, action) => {
        state.isLoading = false;
        state.history = action.payload;
        state.currentBtn = null;
        state.AllRemoveBtn = false;
      })
      .addCase(updateHistoryState.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.code;
      })
      .addCase(addedCurrentLink, (state, action) => {
        state.currentBtn = action.payload.target;
      })
      .addCase(resetHisoryStore, (state, action) => {
        state.history = action.payload;
      });
  },
});
