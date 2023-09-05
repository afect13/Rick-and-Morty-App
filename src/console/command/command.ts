import { parseCommandString } from '../../console';
import { setInputConsoleArguments } from '../../features';
import { store } from '../../store';

export const command = (commandString: string): void => {
  const { command, params } = parseCommandString(commandString);
  if (command) {
    store.dispatch(setInputConsoleArguments(command, params));
  }
};
