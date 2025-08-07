import { http, HttpResponse } from 'msw';

const baseUrl = 'https://pokeapi.co/api/v2';

const mockPokemonList = {
  count: 2,
  next: null,
  previous: null,
  results: [
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
  ],
};

const mockPokemonDetails = {
  id: 1,
  name: 'bulbasaur',
  height: 7,
  weight: 69,
  sprites: {
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
};

export const handlers = [
  http.get(`${baseUrl}/pokemon`, ({ request }) => {
    const url = new URL(request.url);
    const offset = url.searchParams.get('offset');

    console.log(`[MSW] Intercepted request for Pokemon list with offset: ${offset}`);

    return HttpResponse.json(mockPokemonList);
  }),

  http.get(`${baseUrl}/pokemon/:id`, ({ params }) => {
    const { id } = params;
    console.log(`[MSW] Intercepted request for Pokemon ID: ${id}`);

    return HttpResponse.json({ ...mockPokemonDetails, id, name: id });
  }),
];
