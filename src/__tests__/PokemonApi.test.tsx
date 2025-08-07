import { screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { http, HttpResponse } from 'msw';

import { renderWithProviders } from './test-utils';
import { server } from './mocks/server';
import { useGetPokemonDetailQuery, useGetPokemonListQuery } from '../core/services';

const PokemonList = () => {
  const { data, error, isLoading } = useGetPokemonListQuery({});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Oh no, there was an error</div>;
  if (!data) return null;

  return (
    <ul>
      {data.list.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

const PokemonDetail = ({ id }: { id: string }) => {
  const { data, error, isLoading } = useGetPokemonDetailQuery(id);

  if (isLoading) return <div>Loading details...</div>;
  if (error) return <div>Error fetching details</div>;
  if (!data) return null;

  return <h1>{data.name}</h1>;
};

describe('Pokemon API Hooks', () => {
  it('✅ useGetPokemonListQuery: fetches and displays the pokemon list', async () => {
    renderWithProviders(<PokemonList />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('bulbasaur')).toBeInTheDocument();
      expect(screen.getByText('ivysaur')).toBeInTheDocument();
    });

    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  });

  it('✅ useGetPokemonDetailQuery: fetches and displays a single pokemon', async () => {
    renderWithProviders(<PokemonDetail id="pikachu" />);

    expect(screen.getByText(/loading details/i)).toBeInTheDocument();

    expect(await screen.findByRole('heading', { name: /pikachu/i })).toBeInTheDocument();
  });

  it('❌ useGetPokemonListQuery: handles API error state', async () => {
    server.use(
      http.get('https://pokeapi.co/api/v2/pokemon', () => {
        return new HttpResponse(null, { status: 500 });
      })
    );

    renderWithProviders(<PokemonList />);

    await waitFor(() => {
      expect(screen.getByText(/oh no, there was an error/i)).toBeInTheDocument();
    });
  });
});
