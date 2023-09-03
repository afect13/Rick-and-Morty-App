import { createListenerMiddleware } from '@reduxjs/toolkit';
import type { TypedStartListening } from '@reduxjs/toolkit';

import {
  addToFavoritesFromConsole,
  removeFavoritesFromConsole,
  showCharacter,
  showCharacters,
  showHelpsMessage,
  showSearchResult,
  showStartMessage,
  signInConsole,
  signUpConsole,
} from '../../console';
import { msgCommandNotFound } from '../../console';
import { saveInputConsoleCommands } from '../../features';
import type { AppDispatch, RootState } from '../../store';

export const consoleListenerMiddleware = createListenerMiddleware();

type AppStartListening = TypedStartListening<RootState, AppDispatch>;

const startAppListening = consoleListenerMiddleware.startListening as AppStartListening;

startAppListening({
  actionCreator: saveInputConsoleCommands,
  effect: async (action) => {
    const { command, params } = action.payload;
    /* eslint-disable no-console */
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
        console.log(msgCommandNotFound);
    }
    /* eslint-enable no-console */
  },
});
