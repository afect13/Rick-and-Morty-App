import { useRef } from 'react';

import { HELP, WELCOME_MSG, parseCommandString, searchCharacters, showCharacter, showCharacters } from '../../console';
import { useLazyGetCharacterQuery, useLazyGetCharactersQuery, useLazySearchCharacterQuery } from '../../features';

export const Console = () => {
  /* eslint-disable no-console */
  const isShowWelcome = useRef(false);
  const [featchCharacters] = useLazyGetCharactersQuery();
  const [featchSearchCharacters] = useLazySearchCharacterQuery();
  const [featchCharacter] = useLazyGetCharacterQuery();
  const welcomeStyles = `
  font-size: 11px;
  font-weight: bold;
  color: #0066cc;
`;

  if (!isShowWelcome.current) console.log(`%c${WELCOME_MSG}`, welcomeStyles);
  isShowWelcome.current = true;
  window.sudo = (commandString) => {
    const { command, args } = parseCommandString(commandString);
    switch (command) {
      case '/help':
        console.log(HELP);
        break;
      case '/show':
        showCharacters(featchCharacters);
        break;
      case '/search':
        if (args && args[0]) {
          searchCharacters(featchSearchCharacters, args[0]);
        } else {
          console.warn('Enter Search params');
        }
        break;
      case '/character':
        if (args && args[0]) {
          showCharacter(featchCharacter, args[0]);
        } else {
          console.warn('Enter id character');
        }
        break;
      case '/signin':
        console.log('signin');
        break;
      case '/signup':
        console.log('signup');
        console.log(args);
        break;
      case '/add':
        console.log('help');
        break;
      case '/remove':
        console.log('help');
        break;
      default:
        console.log('There are no such commands.');
    }
  };
  /* eslint-enable no-console */
  return null;
};
