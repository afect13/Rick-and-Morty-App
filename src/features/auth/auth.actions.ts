import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { auth } from '../../firebase';

export const signup = createAsyncThunk(
  'auth/signup',
  async ({ email, password }: { email: string; password: string }) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const accessToken = await userCredential.user.getIdToken();
    const userEmail = userCredential.user.email;
    return {
      accessToken,
      email: userEmail,
    };
  }
);
export const signin = createAsyncThunk(
  'auth/signin',
  async ({ email, password }: { email: string; password: string }) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const accessToken = await userCredential.user.getIdToken();
    const userEmail = userCredential.user.email;
    return {
      accessToken,
      email: userEmail,
    };
  }
);

export const signout = createAsyncThunk('auth/signout', async () => {
  await signOut(auth);
  return {
    accessToken: null,
    email: null,
  };
});
