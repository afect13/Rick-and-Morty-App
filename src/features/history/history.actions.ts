import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore/lite';

import { database } from '../../firebase';
import { AppDispatch, RootState } from '../../store';

export const updateHistoryState = createAsyncThunk<string[], string>('history/update', async (email) => {
  if (email) {
    const docRef = doc(database, email, 'data');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { history } = docSnap.data();
      return history;
    }
  }
});

export const addToHistory = createAsyncThunk<void, string, { state: RootState; dispatch: AppDispatch }>(
  'history/added',
  async (link, { getState, dispatch }) => {
    const { auth, history } = getState();
    if (auth.email && auth.isAuthenticated && !history.history.includes(link)) {
      dispatch(addedCurrentLink(link));
      const docRef = doc(database, auth.email, 'data');
      await updateDoc(docRef, {
        history: arrayUnion(link),
      });
      dispatch(updateHistoryState(auth.email));
    }
  }
);

export const removeFromHistory = createAsyncThunk<void, string, { state: RootState; dispatch: AppDispatch }>(
  'history/remove',
  async (link, { getState, dispatch }) => {
    const { auth } = getState();
    if (auth.email && auth.isAuthenticated) {
      dispatch(addedCurrentLink(link));
      const docRef = doc(database, auth.email, 'data');
      await updateDoc(docRef, {
        history: arrayRemove(link),
      });
      dispatch(updateHistoryState(auth.email));
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
      dispatch(updateHistoryState(auth.email));
    }
  }
);

export const addedCurrentLink = createAction('history/targetLink', (target: string) => {
  return {
    payload: {
      target,
    },
  };
});

export const resetHisoryStore = createAction('history/resetStore', () => {
  return {
    payload: [],
  };
});
