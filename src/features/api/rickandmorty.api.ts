import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Character, Response } from '../../models';

export const rickandmortyApi = createApi({
  reducerPath: 'rickandmorty/api',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),

  endpoints: (builder) => ({
    getCharacters: builder.query<Character[], void>({
      query: () => 'character',
      transformResponse: (response: Response<Character>) => response.results,
    }),
    getCharacter: builder.query<Character, number>({
      query: (id) => `character/${id}`,
    }),
    searchCharacter: builder.query<Character[], string>({
      query: (search) => ({
        url: `character/`,
        params: {
          name: search,
        },
      }),
      transformResponse: (response: Response<Character>) => response.results,
    }),
    getFavoritesCharacters: builder.query<Character[], number[]>({
      query: (array) => `character/${array}`,
      transformResponse: (response: Character | Character[]) => (Array.isArray(response) ? response : [response]),
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetCharacterQuery,
  useSearchCharacterQuery,
  useGetFavoritesCharactersQuery,
  useLazyGetCharactersQuery,
  useLazySearchCharacterQuery,
  useLazyGetCharacterQuery,
} = rickandmortyApi;

export const { endpoints } = rickandmortyApi;
