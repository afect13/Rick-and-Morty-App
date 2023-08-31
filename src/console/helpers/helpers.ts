import { useLazyGetCharacterQuery, useLazyGetCharactersQuery, useLazySearchCharacterQuery } from '../../features';

interface ParsedCommand {
  command: string | undefined;
  args: string[] | undefined;
}

export const parseCommandString = (commandSting: string): ParsedCommand => {
  const commandRegex = /\/([^ ]*)/g;
  const paramsRegex = /\[([^\]]+)\]/g;
  const command = commandSting.match(commandRegex);
  const args = commandSting.match(paramsRegex);
  const parsArgs = args?.map((a) => a.slice(1, -1).trim());
  return { command: String(command), args: parsArgs };
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

/* eslint-enable no-console  */
