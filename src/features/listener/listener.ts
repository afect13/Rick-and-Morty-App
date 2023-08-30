import { createListenerMiddleware } from '@reduxjs/toolkit';
import type { TypedStartListening } from '@reduxjs/toolkit';

import { addToFavorites, clearAlertParams, removeFromFavorites, setAlertParams } from '../../features';
import type { AppDispatch, RootState } from '../../store';

export const listenerMiddleware = createListenerMiddleware();

type AppStartListening = TypedStartListening<RootState, AppDispatch>;

const startAppListening = listenerMiddleware.startListening as AppStartListening;

startAppListening({
  actionCreator: addToFavorites.fulfilled,
  effect: async (action, listenerApi) => {
    const id = action.payload;
    listenerApi.dispatch(setAlertParams(`Character with ID-${id} added to favorites.`, 'add'));
    await listenerApi.delay(1500);
    listenerApi.dispatch(clearAlertParams());
  },
});

startAppListening({
  actionCreator: removeFromFavorites.fulfilled,
  effect: async (action, listenerApi) => {
    const id = action.payload;
    listenerApi.dispatch(setAlertParams(`Character with ID-${id} removed from favorites.`, 'remove'));
    await listenerApi.delay(1500);
    listenerApi.dispatch(clearAlertParams());
  },
});
