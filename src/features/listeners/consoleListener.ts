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
  effect: async (action) => {
    const { command, params } = action.payload;
    switch (command) {
      case '/start':
        showStartMessage();
        break;
      case '/help':
        showHelpsMessage();
        break;
      case '/show':
        showCharacters();
        break;
      case '/search':
        showSearchResult(params);
        break;
      case '/character':
        showCharacter(params);
        break;
      case '/signin':
        signInConsole(params);
        break;
      case '/signup':
        signUpConsole(params);
        break;
      case '/add':
        addToFavoritesFromConsole(params);
        break;
      case '/remove':
        removeFavoritesFromConsole(params);
        break;
      default:
        showNotFound();
    }
  },
});
