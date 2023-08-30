import { createListenerMiddleware } from '@reduxjs/toolkit';
import type { TypedStartListening } from '@reduxjs/toolkit';

import { addedAlertEvent, addedFavorites, removeAlertEvent, removeFavorites } from '../../features';
import type { AppDispatch, RootState } from '../../store';

export const listenerMiddleware = createListenerMiddleware();

type AppStartListening = TypedStartListening<RootState, AppDispatch>;

const startAppListening = listenerMiddleware.startListening as AppStartListening;

startAppListening({
  type: addedFavorites.fulfilled.type,
  effect: async (action, listenerApi) => {
    if ('payload' in action) {
      const id = action.payload;
      listenerApi.dispatch(addedAlertEvent(`Character with ID-${id} added to favorites.`, 'add'));
      await listenerApi.delay(1500);
      listenerApi.dispatch(removeAlertEvent());
    }
  },
});

startAppListening({
  type: removeFavorites.fulfilled.type,
  effect: async (action, listenerApi) => {
    if ('payload' in action) {
      const id = action.payload;
      listenerApi.dispatch(addedAlertEvent(`Character with ID-${id} removed from favorites.`, 'remove'));
      await listenerApi.delay(1500);
      listenerApi.dispatch(removeAlertEvent());
    }
  },
});
