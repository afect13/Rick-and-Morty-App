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
  validateCredentials,
} from '../../console';
import { addToFavorites, endpoints, removeFromFavorites, signin, signup } from '../../features';
import { AppDispatch } from '../../store';

type Params = string[] | undefined;
/* eslint-disable no-console */
export const showStartMessage = (): void => {
  console.log(`%c${msgWelcome}`, stlWelcome);
};
export const showHelpsMessage = (): void => {
  console.log(`%c${msgHelp}`, stlHelp);
};
export const showCharacters = (dispatch: AppDispatch): void => {
  dispatch(endpoints.getCharacters.initiate())
    .unwrap()
    .then((characters) => console.table(characters))
    .catch((e) => console.warn(e));
};
export const showSearchResult = (params: Params, dispatch: AppDispatch) => {
  if (params) {
    dispatch(endpoints.searchCharacter.initiate(params[0]))
      .unwrap()
      .then((searchResult) => console.table(searchResult))
      .catch((e) => console.warn(e));
  } else {
    console.warn(msgSearchWarn);
    return;
  }
};

export const showCharacter = (params: Params, dispatch: AppDispatch): void => {
  if (params && params[0] && Number(params[0])) {
    dispatch(endpoints.getCharacter.initiate(Number(params[0])))
      .unwrap()
      .then((characters) => console.log(characters))
      .catch((e) => console.warn(e));
  } else {
    console.warn(msgCharacterWarn);
    return;
  }
};

export const signInConsole = (params: Params, dispatch: AppDispatch): void => {
  if (params && params[0] && params[1]) {
    if (validateCredentials(params)) {
      dispatch(signin({ email: params[0], password: params[1] }))
        .unwrap()
        .then((user) => console.log(`Hello, ${user}`))
        .catch((e) => console.warn(e));
    }
  } else {
    console.warn(msgAuthWarn);
    return;
  }
};
export const signUpConsole = (params: Params, dispatch: AppDispatch): void => {
  if (params && params[0] && params[1]) {
    if (validateCredentials(params)) {
      dispatch(signup({ email: params[0], password: params[1] }))
        .unwrap()
        .then((user) => console.log(`Hello, ${user}`))
        .catch((e) => console.warn(e));
    }
  } else {
    console.warn(msgAuthWarn);
    return;
  }
};
export const addToFavoritesFromConsole = (params: Params, dispatch: AppDispatch, isAuthenticated: boolean): void => {
  if (params && params[0] && isAuthenticated) {
    dispatch(addToFavorites(Number(params[0])))
      .unwrap()
      .then((character) => console.log(`Character ${character} is added`))
      .catch((e) => console.warn(e));
  } else {
    console.warn(msgEmptyIdWarn);
    return;
  }
};
export const removeFavoritesFromConsole = (params: Params, dispatch: AppDispatch, isAuthenticated: boolean): void => {
  if (params && params[0] && isAuthenticated) {
    dispatch(removeFromFavorites(Number(params[0])))
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

/* eslint-enable no-console */
