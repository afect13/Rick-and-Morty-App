import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore/lite';

import { database } from '../../firebase';
import { AppDispatch, RootState } from '../../store';

export const updateFavoritesState = createAsyncThunk<number[], string>('favorites/update', async (email) => {
  if (email) {
    const docRef = doc(database, email, 'data');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { favorites } = docSnap.data();
      return favorites;
    }
  }
});

export const addToFavorites = createAsyncThunk<number, number, { state: RootState; dispatch: AppDispatch }>(
  'favorites/add',
  async (id, { getState, dispatch }) => {
    const { auth } = getState();
    if (auth.email && auth.isAuthenticated) {
      dispatch(addedCurrentId(id));
      const docRef = doc(database, auth.email, 'data');
      await updateDoc(docRef, {
        favorites: arrayUnion(id),
      });
      dispatch(updateFavoritesState(auth.email));
    }
    return id;
  }
);

export const removeFromFavorites = createAsyncThunk<number, number, { state: RootState; dispatch: AppDispatch }>(
  'favorites/remove',
  async (id, { getState, dispatch }) => {
    const { auth } = getState();
    if (auth.email && auth.isAuthenticated) {
      dispatch(addedCurrentId(id));
      const docRef = doc(database, auth.email, 'data');
      await updateDoc(docRef, {
        favorites: arrayRemove(id),
      });
      dispatch(updateFavoritesState(auth.email));
    }
    return id;
  }
);

export const removeAllFromFavorites = createAsyncThunk<void, void, { state: RootState; dispatch: AppDispatch }>(
  'favorites/removeAll',
  async (_, { getState, dispatch }) => {
    const { auth } = getState();
    if (auth.email && auth.isAuthenticated) {
      const docRef = doc(database, auth.email, 'data');
      await updateDoc(docRef, {
        favorites: [],
      });
      dispatch(updateFavoritesState(auth.email));
    }
  }
);

export const toggleFavorites = createAsyncThunk<void, number, { state: RootState; dispatch: AppDispatch }>(
  'favorites/toggleFavorites',
  async (id, { getState, dispatch }) => {
    const { favorites, auth } = getState();
    if (favorites.favorites.includes(id) && auth.isAuthenticated) {
      dispatch(removeFromFavorites(id));
    }
    if (!favorites.favorites.includes(id) && auth.isAuthenticated) {
      dispatch(addToFavorites(id));
    }
  }
);

export const addedCurrentId = createAction('favorites/targetId', (target: number) => {
  return {
    payload: {
      target,
    },
  };
});

export const resetFavoritesStore = createAction('favorites/resetStore', () => {
  return {
    payload: [],
  };
});
