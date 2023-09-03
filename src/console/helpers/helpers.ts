import { schema } from '../../components';
import {
  msgAuthWarn,
  msgCharacterWarn,
  msgCommandNotFound,
  msgEmptyIdWarn,
  msgHelp,
  msgSearchWarn,
  msgWelcome,
  stlHelp,
  stlWelcome,
} from '../../console';
import { addToFavorites, endpoints, removeFromFavorites, signin, signup } from '../../features';
import { store } from '../../store';

interface ParsedCommand {
  command: string | undefined;
  params: string[] | undefined;
}

type Params = string[] | undefined;

export const parseCommandString = (commandSting: string): ParsedCommand => {
  const commandRegex = /\/([^ ]*)/g;
  const paramsRegex = /\[([^\]]+)\]/g;
  const command = commandSting.match(commandRegex);
  const params = commandSting.match(paramsRegex);
  const parsParams = params?.map((p) => p.slice(1, -1).trim());
  return { command: String(command), params: parsParams };
};
/* eslint-disable no-console */
export const showStartMessage = (): void => {
  console.log(`%c${msgWelcome}`, stlWelcome);
};
export const showHelpsMessage = (): void => {
  console.log(`%c${msgHelp}`, stlHelp);
};
export const showCharacters = (): void => {
  store
    .dispatch(endpoints.getCharacters.initiate())
    .unwrap()
    .then((characters) => console.table(characters))
    .catch((e) => console.warn(e));
};
export const showSearchResult = (params: Params) => {
  if (params) {
    store
      .dispatch(endpoints.searchCharacter.initiate(params[0]))
      .unwrap()
      .then((searchResult) => console.table(searchResult))
      .catch((e) => console.warn(e));
  } else {
    console.warn(msgSearchWarn);
    return;
  }
};

export const showCharacter = (params: Params): void => {
  if (params && params[0] && Number(params[0])) {
    store
      .dispatch(endpoints.getCharacter.initiate(Number(params[0])))
      .unwrap()
      .then((characters) => console.log(characters))
      .catch((e) => console.warn(e));
  } else {
    console.warn(msgCharacterWarn);
    return;
  }
};

export const signInConsole = (params: Params): void => {
  if (params && params[0] && params[1]) {
    if (validateCredentials(params)) {
      store
        .dispatch(signin({ email: params[0], password: params[1] }))
        .unwrap()
        .then((user) => console.log(`Hello, ${user}`))
        .catch((e) => console.warn(e));
    }
  } else {
    console.warn(msgAuthWarn);
    return;
  }
};
export const signUpConsole = (params: Params): void => {
  if (params && params[0] && params[1]) {
    if (validateCredentials(params)) {
      store
        .dispatch(signup({ email: params[0], password: params[1] }))
        .unwrap()
        .then((user) => console.log(`Hello, ${user}`))
        .catch((e) => console.warn(e));
    }
  } else {
    console.warn(msgAuthWarn);
    return;
  }
};
export const addToFavoritesFromConsole = (params: Params): void => {
  const { isAuthenticated } = store.getState().auth;
  if (params && params[0] && isAuthenticated) {
    store
      .dispatch(addToFavorites(Number(params[0])))
      .unwrap()
      .then((character) => console.log(`Character ${character} is added`))
      .catch((e) => console.warn(e));
  } else {
    console.warn(msgEmptyIdWarn);
    return;
  }
};
export const removeFavoritesFromConsole = (params: Params): void => {
  const { isAuthenticated } = store.getState().auth;
  if (params && params[0] && isAuthenticated) {
    store
      .dispatch(removeFromFavorites(Number(params[0])))
      .unwrap()
      .then((character) => console.log(`Character ${character} is deletet`))
      .catch((e) => console.warn(e));
  } else {
    console.warn(msgEmptyIdWarn);
    return;
  }
};
export const showNotFound = (): void => {
  console.warn(msgCommandNotFound);
};

export const validateCredentials = (args: string[] | undefined): boolean => {
  try {
    if (args && args[0] && args[1]) {
      const credentials = {
        email: args[0],
        password: args[1],
      };
      schema.validateSync(credentials);
      return true;
    }
  } catch (e) {
    console.warn(e);
  }
  return false;
};

/* eslint-enable no-console */
