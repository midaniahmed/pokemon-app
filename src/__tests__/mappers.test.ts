import { describe, it, expect } from 'vitest';
import { mapToPokemonDetails } from '../core/models';

describe('mapToPokemonDetails', () => {
  it('should transform raw API data into PokemonDetailsData', () => {
    const rawData = {
      id: 25,
      name: 'pikachu',
      height: 4,
      weight: 60,
      sprites: {
        front_default: 'url_to_sprite.png',
        other: {},
      },
      types: [{ slot: 1, type: { name: 'electric', url: '...' } }],
    };

    const result = mapToPokemonDetails(rawData);

    expect(result.id).toBe(25);
    expect(result.name).toBe('pikachu');
    expect(result.imageUrl).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png');
    expect(result.types).toEqual(['electric']);
  });
});
