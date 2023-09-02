import { createSlice } from '@reduxjs/toolkit';

import { clearAlertParams, setAlertParams } from '../../features';

interface GlobalState {
  alert: { eventType: string | null; message: string | null };
}
const initialState: GlobalState = {
  alert: { eventType: null, message: null },
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
      });
  },
});
