import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Character, ServerResponse } from '../../models/characters';

export const rickandmortyApi = createApi({
  reducerPath: 'rickandmorty/api',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),

  endpoints: (builder) => ({
    getCharacters: builder.query<Character[], void>({
      query: () => 'character',
      transformResponse: (response: ServerResponse<Character>) => response.results,
    }),
    getCharacter: builder.query<Character, number>({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterQuery } = rickandmortyApi;
