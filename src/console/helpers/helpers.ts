import { schema } from '../../components';
import { useLazyGetCharacterQuery, useLazyGetCharactersQuery, useLazySearchCharacterQuery } from '../../features';

interface ParsedCommand {
  command: string | undefined;
  params: string[] | undefined;
}

export const parseCommandString = (commandSting: string): ParsedCommand => {
  const commandRegex = /\/([^ ]*)/g;
  const paramsRegex = /\[([^\]]+)\]/g;
  const command = commandSting.match(commandRegex);
  const params = commandSting.match(paramsRegex);
  const parsParams = params?.map((p) => p.slice(1, -1).trim());
  return { command: String(command), params: parsParams };
};

/* eslint-disable no-console */
export const showCharacters = async (
  fetchCharacter: ReturnType<typeof useLazyGetCharactersQuery>[0]
): Promise<void> => {
  const characters = await fetchCharacter();
  if (characters.isSuccess) {
    console.table(characters.data);
  } else {
    console.warn(characters.error);
  }
};

export const searchCharacters = async (
  searchCharacter: ReturnType<typeof useLazySearchCharacterQuery>[0],
  searchParams: string
): Promise<void> => {
  const characters = await searchCharacter(searchParams);
  if (characters.isSuccess) {
    console.table(characters.data);
  } else {
    console.warn(characters.error);
  }
};

export const showCharacter = async (
  searchCharacter: ReturnType<typeof useLazyGetCharacterQuery>[0],
  id: string
): Promise<void> => {
  const character = await searchCharacter(Number(id));
  if (character.isSuccess) {
    console.info(character.data);
  } else {
    console.warn(character.error);
  }
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

/* eslint-enable no-console  */
