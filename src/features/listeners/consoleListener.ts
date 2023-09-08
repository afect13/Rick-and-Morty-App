import { createListenerMiddleware } from '@reduxjs/toolkit';
import type { TypedStartListening } from '@reduxjs/toolkit';

import {
  addToFavoritesFromConsole,
  removeFavoritesFromConsole,
  showCharacter,
  showCharacters,
  showHelpsMessage,
  showNotFound,
  showSearchResult,
  showStartMessage,
  signInConsole,
  signUpConsole,
} from '../../console';
import { setInputConsoleArguments } from '../../features';
import type { AppDispatch, RootState } from '../../store';

export const consoleListenerMiddleware = createListenerMiddleware();

type AppStartListening = TypedStartListening<RootState, AppDispatch>;

const startAppListening = consoleListenerMiddleware.startListening as AppStartListening;

startAppListening({
  actionCreator: setInputConsoleArguments,
  effect: async (action, listenerApi) => {
    const { command, params } = action.payload;
    const dispatch = listenerApi.dispatch;
    const { isAuthenticated } = listenerApi.getState().auth;
    switch (command) {
      case '/start':
        showStartMessage();
        break;
      case '/help':
        showHelpsMessage();
        break;
      case '/show':
        showCharacters(dispatch);
        break;
      case '/search':
        showSearchResult(params, dispatch);
        break;
      case '/character':
        showCharacter(params, dispatch);
        break;
      case '/signin':
        signInConsole(params, dispatch);
        break;
      case '/signup':
        signUpConsole(params, dispatch);
        break;
      case '/add':
        addToFavoritesFromConsole(params, dispatch, isAuthenticated);
        break;
      case '/remove':
        removeFavoritesFromConsole(params, dispatch, isAuthenticated);
        break;
      default:
        showNotFound();
    }
  },
});
