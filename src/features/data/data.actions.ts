import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { arrayRemove, arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore/lite';

import { database } from '../../firebase';

interface Mutation {
  email: string;
  data: number | string;
  param: 'add' | 'remove';
  arrayIs: 'favorites' | 'history';
}

interface Clear {
  email: string;
  arrayIs: Mutation['arrayIs'];
}

export const initData = createAsyncThunk('data/init', async (email: string) => {
  await setDoc(doc(database, email, 'data'), {
    favorites: [],
    history: [],
  });
});
export const getData = createAsyncThunk('data/get', async (email: string) => {
  const docRef = doc(database, email, 'data');
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const { favorites, history } = docSnap.data();
    return { favorites, history };
  }
});

export const mutationData = createAsyncThunk('data/mutation', async ({ email, data, param, arrayIs }: Mutation) => {
  const docRef = doc(database, email, 'data');
  if (param === 'add') {
    await updateDoc(docRef, {
      [arrayIs]: arrayUnion(data),
    });
  }
  if (param === 'remove') {
    await updateDoc(docRef, {
      [arrayIs]: arrayRemove(data),
    });
  }
});

export const clearSpecificArray = createAsyncThunk('data/clear', async ({ email, arrayIs }: Clear) => {
  const docRef = doc(database, email, 'data');
  await updateDoc(docRef, {
    [arrayIs]: [],
  });
});

export const addedTarget = createAction('data/target', (target: number | string) => {
  return {
    payload: {
      target,
    },
  };
});
