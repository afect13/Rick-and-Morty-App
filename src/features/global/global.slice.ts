import { createSlice } from '@reduxjs/toolkit';

import { clearAlertParams, setAlertParams, setSearch, setSuggestions } from '../../features';

type GlobalState = {
  alert: { eventType: string | null; message: string | null };
  search: string;
  suggestionsIs: boolean;
};
const initialState: GlobalState = {
  alert: { eventType: null, message: null },
  search: '',
  suggestionsIs: false,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setAlertParams, (state, action) => {
        state.alert = action.payload;
      })
      .addCase(clearAlertParams, (state, action) => {
        state.alert = action.payload;
      })
      .addCase(setSearch, (state, action) => {
        state.search = action.payload;
      })
      .addCase(setSuggestions, (state, action) => {
        state.suggestionsIs = action.payload;
      });
  },
});
