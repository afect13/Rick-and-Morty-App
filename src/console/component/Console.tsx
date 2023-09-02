import { useRef } from 'react';
import { useSelector } from 'react-redux';

import {
  msgAuthWarn,
  msgCharacterIsAdd,
  msgCharacterIsRemove,
  msgCharacterWarn,
  msgCommandNotFound,
  msgEmptyIdWarn,
  msgHelp,
  msgIsAuth,
  msgIsValid,
  msgLoginWarn,
  msgSearchWarn,
  msgWelcome,
  parseCommandString,
  searchCharacters,
  showCharacter,
  showCharacters,
  stlHelp,
  stlWelcome,
  validateCredentials,
} from '../../console';
import {
  addToFavorites,
  getIsAuthenticated,
  removeFromFavorites,
  signin,
  signup,
  useLazyGetCharacterQuery,
  useLazyGetCharactersQuery,
  useLazySearchCharacterQuery,
} from '../../features';
import { useAppDispatch } from '../../store';

export const Console = () => {
  /* eslint-disable no-console */
  const isShowWelcome = useRef(false);
  const dispatch = useAppDispatch();
  const [featchCharacters] = useLazyGetCharactersQuery();
  const [featchSearchCharacters] = useLazySearchCharacterQuery();
  const [featchCharacter] = useLazyGetCharacterQuery();
  const isAuth = useSelector(getIsAuthenticated);

  if (isAuth) {
    console.log(msgIsAuth);
  }
  if (!isShowWelcome.current) {
    console.log(`%c${msgWelcome}`, stlWelcome);
  }
  isShowWelcome.current = true;
  window.sudo = (commandString) => {
    const { command, params } = parseCommandString(commandString);
    switch (command) {
      case '/help':
        console.log(`%c${msgHelp}`, stlHelp);
        break;
      case '/show':
        showCharacters(featchCharacters);
        break;
      case '/search':
        if (params && params[0]) {
          searchCharacters(featchSearchCharacters, params[0]);
        } else {
          console.warn(msgSearchWarn);
        }
        break;
      case '/character':
        if (params && params[0]) {
          showCharacter(featchCharacter, params[0]);
        } else {
          console.warn(msgCharacterWarn);
        }
        break;
      case '/signin':
        if (validateCredentials(params) && params) {
          console.log(msgIsValid);
          dispatch(signin({ email: params[0], password: params[1] }));
        } else {
          console.warn(msgAuthWarn);
        }
        break;
      case '/signup':
        if (validateCredentials(params) && params) {
          console.log(msgIsValid);
          dispatch(signup({ email: params[0], password: params[1] }));
        } else {
          console.warn(msgAuthWarn);
        }
        break;
      case '/add':
        if (isAuth && params && params[0] && Number(params[0])) {
          dispatch(addToFavorites(Number(params[0])));
          console.log(msgCharacterIsAdd);
        } else {
          if (!isAuth) {
            console.warn(msgLoginWarn);
          } else {
            console.warn(msgEmptyIdWarn);
          }
        }
        break;
      case '/remove':
        if (isAuth && params && params[0] && Number(params[0])) {
          dispatch(removeFromFavorites(Number(params[0])));
          console.log(msgCharacterIsRemove);
        } else {
          if (!isAuth) {
            console.warn(msgLoginWarn);
          } else {
            console.warn(msgEmptyIdWarn);
          }
        }
        break;
      default:
        console.log(msgCommandNotFound);
    }
  };
  /* eslint-enable no-console */
  return null;
};
