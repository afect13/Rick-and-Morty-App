import { createSlice } from '@reduxjs/toolkit';

import {
  addedCurrentId,
  addedFavorites,
  addedMessage,
  removeAllFavorites,
  removeFavorites,
  removeMessage,
  resetFavoritesStore,
  toggleFavorites,
  updateFavoritesState,
} from './favorites.actions';

interface FavoritesState {
  favorites: number[];
  isLoading: boolean;
  error: string | undefined;
  isLoadingById: number | null;
  message: string | null;
}
const initialState: FavoritesState = {
  favorites: [],
  isLoading: false,
  error: undefined,
  isLoadingById: null,
  message: null,
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addedFavorites.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(addedFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.code;
      })
      .addCase(removeFavorites.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(removeFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.code;
      })
      .addCase(removeAllFavorites.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(removeAllFavorites.rejected, (state, action) => {
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
      })
      .addCase(addedMessage, (state, action) => {
        state.message = action.payload;
      })
      .addCase(removeMessage, (state, action) => {
        state.message = action.payload;
      });
  },
});
