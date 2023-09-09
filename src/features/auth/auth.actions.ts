import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore/lite';

import {
  favoritesLoaded,
  historyLoaded,
  resetFavoritesStore,
  resetHisoryStore,
  updateFavoritesState,
  updateHistoryState,
} from '../../features';
import { auth, database } from '../../firebase';
import { AppDispatch } from '../../store';

type Auth = {
  email: string;
  password: string;
};

export const signup = createAsyncThunk<string, Auth, { dispatch: AppDispatch }>(
  'auth/signup',
  async ({ email, password }, { dispatch }) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userEmail = userCredential.user.email;
    if (userEmail) {
      dispatch(initDateBase(email));
      return userEmail;
    } else {
      throw new Error('User email is undefined');
    }
  }
);

export const signin = createAsyncThunk<string, Auth, { dispatch: AppDispatch }>(
  'auth/signin',
  async ({ email, password }, { dispatch }) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userEmail = userCredential.user.email;
    if (userEmail) {
      dispatch(updateHistoryState(userEmail));
      dispatch(updateFavoritesState(userEmail));
      return userEmail;
    } else {
      throw new Error('User email is undefined');
    }
  }
);

export const signout = createAsyncThunk<null, void, { dispatch: AppDispatch }>(
  'auth/signout',
  async (_, { dispatch }) => {
    await signOut(auth);
    dispatch(resetFavoritesStore());
    dispatch(resetHisoryStore());
    return null;
  }
);

export const checkAuth = createAsyncThunk<void, void, { dispatch: AppDispatch }>(
  'auth/checkAuth',
  async (_, { dispatch }) => {
    onAuthStateChanged(auth, (user) => {
      if (user && user.email) {
        dispatch(setAuthParams(user.email));
        dispatch(setCheckPassed(true));
        dispatch(updateHistoryState(user.email));
        dispatch(updateFavoritesState(user.email));
      } else {
        dispatch(setCheckPassed(true));
        dispatch(favoritesLoaded());
        dispatch(historyLoaded());
      }
    });
  }
);

export const initDateBase = createAsyncThunk('auth/init', async (email: string) => {
  await setDoc(doc(database, email, 'data'), {
    favorites: [],
    history: [],
  });
});

export const clearError = createAction('auth/clearError', () => {
  return {
    payload: undefined,
  };
});

export const setAuthParams = createAction('auth/setAuth', (email: string) => {
  return {
    payload: { authIs: true, email },
  };
});

export const setCheckPassed = createAction('auth/setPassed', (checkIs: boolean) => {
  return {
    payload: checkIs,
  };
});
