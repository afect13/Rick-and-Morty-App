import { parseCommandString } from '../../console';
import { saveInputConsoleCommands } from '../../features';
import { store } from '../../store';

export const command = (commandString: string): void => {
  const { command, params } = parseCommandString(commandString);
  if (command) {
    store.dispatch(saveInputConsoleCommands(command, params));
  }
};
