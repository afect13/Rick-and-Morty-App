import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore/lite';

import { database } from '../../firebase';
import { AppDispatch, RootState } from '../../store';

export const updateHistoryState = createAsyncThunk<string[], string, { dispatch: AppDispatch }>(
  'history/update',
  async (email, { dispatch }) => {
    if (email) {
      const docRef = doc(database, email, 'data');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const { history } = docSnap.data();
        dispatch(historyLoaded());
        return history;
      }
    } else {
      dispatch(historyLoaded());
    }
  }
);

export const addToHistory = createAsyncThunk<void, string, { state: RootState; dispatch: AppDispatch }>(
  'history/add',
  async (link, { getState, dispatch }) => {
    const { auth, history } = getState();
    if (auth.email && auth.isAuthenticated && !history.history.includes(link)) {
      const docRef = doc(database, auth.email, 'data');
      await updateDoc(docRef, {
        history: arrayUnion(link),
      });
      await dispatch(updateHistoryState(auth.email));
    }
  }
);

export const removeFromHistory = createAsyncThunk<void, string, { state: RootState; dispatch: AppDispatch }>(
  'history/remove',
  async (link, { getState, dispatch }) => {
    const { auth } = getState();
    if (auth.email && auth.isAuthenticated) {
      const docRef = doc(database, auth.email, 'data');
      await updateDoc(docRef, {
        history: arrayRemove(link),
      });
      await dispatch(updateHistoryState(auth.email));
    }
  }
);

export const removeAllFromHistory = createAsyncThunk<void, void, { state: RootState; dispatch: AppDispatch }>(
  'history/removeAll',
  async (_, { getState, dispatch }) => {
    const { auth } = getState();
    if (auth.email && auth.isAuthenticated) {
      const docRef = doc(database, auth.email, 'data');
      await updateDoc(docRef, {
        history: [],
      });
      await dispatch(updateHistoryState(auth.email));
    }
  }
);

export const resetHisoryStore = createAction('history/resetStore', () => {
  return {
    payload: [],
  };
});

export const historyLoaded = createAction('favorites/historyLoaded', () => {
  return {
    payload: true,
  };
});
