import { createSlice } from '@reduxjs/toolkit';

import {
  addToFavorites,
  removeAllFromFavorites,
  removeFromFavorites,
  resetFavoritesStore,
  toggleFavorites,
  updateFavoritesState,
} from '../../features';

type FavoritesState = {
  favorites: number[];
  error: string | undefined;
};
const initialState: FavoritesState = {
  favorites: [],
  error: undefined,
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToFavorites.pending, (state) => {
        state.error = undefined;
      })
      .addCase(addToFavorites.rejected, (state, action) => {
        state.error = action.error.code;
      })
      .addCase(removeFromFavorites.pending, (state) => {
        state.error = undefined;
      })
      .addCase(removeFromFavorites.rejected, (state, action) => {
        state.error = action.error.code;
      })
      .addCase(removeAllFromFavorites.pending, (state) => {
        state.error = undefined;
      })
      .addCase(removeAllFromFavorites.rejected, (state, action) => {
        state.error = action.error.code;
      })
      .addCase(updateFavoritesState.pending, (state) => {
        state.error = undefined;
      })
      .addCase(updateFavoritesState.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(updateFavoritesState.rejected, (state, action) => {
        state.error = action.error.code;
      })
      .addCase(toggleFavorites.pending, (state) => {
        state.error = undefined;
      })
      .addCase(toggleFavorites.rejected, (state, action) => {
        state.error = action.error.code;
      })
      .addCase(resetFavoritesStore, (state, action) => {
        state.favorites = action.payload;
        state.error = undefined;
      });
  },
});
