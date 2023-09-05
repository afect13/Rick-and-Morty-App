import { schema } from '../../utils';

type ParsedCommand = {
  command: string | undefined;
  params: string[] | undefined;
};

export const parseCommandString = (commandSting: string): ParsedCommand => {
  const commandRegex = /\/([^ ]*)/g;
  const paramsRegex = /\[([^\]]+)\]/g;
  const command = commandSting.match(commandRegex);
  const params = commandSting.match(paramsRegex);
  const parsParams = params?.map((p) => p.slice(1, -1).trim());
  return { command: String(command), params: parsParams };
};
/* eslint-disable no-console */
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
