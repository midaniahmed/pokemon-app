import { mapToBaseStat, type BaseStats } from './base-stats.model';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface PokemonDetailsData {
  id: number;
  name: string;
  imageUrl: string;
  type: string;
  height: number;
  weight: number;
  baseExperience: number;
  types: string[];
  abilities: string[];
  stats: BaseStats[];
  // add more as needed
}

export function mapToPokemonDetails(data: any): PokemonDetailsData {
  return {
    id: data.id,
    name: data.name,
    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
    height: data.height,
    weight: data.weight,
    baseExperience: data.base_experience,
    types: data?.types?.map((item: any) => item.type.name),
    type: data?.types[0]?.type.name,
    abilities: data.abilities?.map((item: any) => item.ability.name),
    stats: data.stats?.map(mapToBaseStat),
  };
}
