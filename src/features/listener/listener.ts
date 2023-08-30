import { createListenerMiddleware } from '@reduxjs/toolkit';
import type { TypedStartListening } from '@reduxjs/toolkit';

import { addedFavorites, addedMessage, removeFavorites, removeMessage } from '..';
import type { AppDispatch, RootState } from '../../store';

export const listenerMiddleware = createListenerMiddleware();

type AppStartListening = TypedStartListening<RootState, AppDispatch>;

const startAppListening = listenerMiddleware.startListening as AppStartListening;

startAppListening({
  type: addedFavorites.fulfilled.type,
  effect: async (action, listenerApi) => {
    if ('payload' in action) {
      const id = action.payload;
      listenerApi.dispatch(addedMessage(`Character with ID-${id} added to favorites.`));
      await listenerApi.delay(1000);
      listenerApi.dispatch(removeMessage());
    }
  },
});

startAppListening({
  type: removeFavorites.fulfilled.type,
  effect: async (action, listenerApi) => {
    if ('payload' in action) {
      const id = action.payload;
      listenerApi.dispatch(addedMessage(`Character with ID-${id} removed from favorites.`));
      await listenerApi.delay(1000);
      listenerApi.dispatch(removeMessage());
    }
  },
});
