import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import {
  authSlice,
  consoleListenerMiddleware,
  favoritesListenerMiddleware,
  favoritesSlice,
  globalSlice,
  historySlice,
  rickandmortyApi,
} from '../features';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    favorites: favoritesSlice.reducer,
    history: historySlice.reducer,
    global: globalSlice.reducer,
    [rickandmortyApi.reducerPath]: rickandmortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(favoritesListenerMiddleware.middleware, consoleListenerMiddleware.middleware)
      .concat(rickandmortyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
