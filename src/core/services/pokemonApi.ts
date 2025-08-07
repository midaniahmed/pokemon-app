import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { mapPokemonPaginatedList, mapToPokemonDetails, type PokemonDetails, type PokemonListResponse } from '../models';

const baseUrl = import.meta.env.VITE_BASE_API_URL || 'https://pokeapi.co/api/v2';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ['Pokemon', 'PokemonList'],
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonListResponse, { limit?: number; offset?: number }>({
      query: ({ limit = 20, offset = 0 } = {}) => `/pokemon?limit=${limit}&offset=${offset}`,
      transformResponse: (paginatedList) => mapPokemonPaginatedList(paginatedList),
      providesTags: ['PokemonList'],
    }),
    getPokemonDetail: builder.query<PokemonDetails, string>({
      query: (id) => `/pokemon/${id}`,
      providesTags: (_, __, id) => [{ type: 'Pokemon', id }],
      transformResponse: (details) => mapToPokemonDetails(details),
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonDetailQuery } = pokemonApi;
