import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore/lite';

import { resetFavoritesStore, resetHisoryStore, updateFavoritesState, updateHistoryState } from '../../features';
import { auth, database } from '../../firebase';
import { AppDispatch } from '../../store';

interface Auth {
  email: string;
  password: string;
}

export const signup = createAsyncThunk<string, Auth, { dispatch: AppDispatch }>(
  'auth/signup',
  async ({ email, password }, { dispatch }) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userEmail = userCredential.user.email;
    if (userEmail) {
      dispatch(initInFirebase(email));
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

export const initInFirebase = createAsyncThunk('auth/init', async (email: string) => {
  await setDoc(doc(database, email, 'data'), {
    favorites: [],
    history: [],
  });
});
