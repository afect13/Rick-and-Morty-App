import { createAsyncThunk } from '@reduxjs/toolkit';
import { arrayRemove, arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore/lite';

import { database } from '../../firebase';

interface Params {
  email: string;
  id: string;
  param: 'add' | 'remove';
  arrayIs: 'favorites' | 'history';
}

export const initData = createAsyncThunk('data/init', async (email: string) => {
  await setDoc(doc(database, email, 'data'), {
    favorites: [],
    history: [],
  });
});
export const getData = createAsyncThunk('data/getdate', async (email: string) => {
  const docRef = doc(database, email, 'data');
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const { favorites, history } = docSnap.data();
    return { favorites, history };
  }
});

export const mutationData = createAsyncThunk('data/mutation', async ({ email, id, param, arrayIs }: Params) => {
  const docRef = doc(database, email, 'data');
  if (param === 'add') {
    await updateDoc(docRef, {
      [arrayIs]: arrayUnion(id),
    });
  }
  if (param === 'remove') {
    await updateDoc(docRef, {
      [arrayIs]: arrayRemove(id),
    });
  }
});
