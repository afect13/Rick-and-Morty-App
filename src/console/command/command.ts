import { parseCommandString } from '../../console';
import { setInputConsoleArguments } from '../../features';
import { AppDispatch } from '../../store/';

export const command = (dispatch: AppDispatch) => {
  return function (commandString: string): void {
    const { command, params } = parseCommandString(commandString);
    if (command) {
      dispatch(setInputConsoleArguments(command, params));
    }
  };
};
