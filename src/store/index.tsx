import { configureStore } from '@reduxjs/toolkit';

import { rickandmortyApi } from '../features';

export const store = configureStore({
  reducer: {
    [rickandmortyApi.reducerPath]: rickandmortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickandmortyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
