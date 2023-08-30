import { createSlice } from '@reduxjs/toolkit';

import {
  addToFavorites,
  addedCurrentId,
  removeAllFromFavorites,
  removeFromFavorites,
  resetFavoritesStore,
  toggleFavorites,
  updateFavoritesState,
} from './favorites.actions';

interface FavoritesState {
  favorites: number[];
  isLoading: boolean;
  error: string | undefined;
  isLoadingById: number | null;
}
const initialState: FavoritesState = {
  favorites: [],
  isLoading: false,
  error: undefined,
  isLoadingById: null,
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToFavorites.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(addToFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.code;
      })
      .addCase(removeFromFavorites.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(removeFromFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.code;
      })
      .addCase(removeAllFromFavorites.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(removeAllFromFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.code;
      })
      .addCase(updateFavoritesState.pending, (state) => {
        state.error = undefined;
      })
      .addCase(updateFavoritesState.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorites = action.payload;
        state.isLoadingById = null;
      })
      .addCase(updateFavoritesState.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.code;
      })
      .addCase(toggleFavorites.pending, (state) => {
        state.error = undefined;
      })
      .addCase(toggleFavorites.rejected, (state, action) => {
        state.error = action.error.code;
      })
      .addCase(addedCurrentId, (state, action) => {
        state.isLoadingById = action.payload.target;
      })
      .addCase(resetFavoritesStore, (state, action) => {
        state.favorites = action.payload;
      });
  },
});
