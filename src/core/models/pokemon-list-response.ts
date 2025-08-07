import { mapToPokemonSummary, type PokemonSummary } from './pokemon-summary.model';

export interface PokemonListResponse {
  totalCount: number;
  list: PokemonSummary[];
  next?: string | null;
  previous?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapPokemonPaginatedList(data: any): PokemonListResponse {
  return {
    totalCount: data.count,
    list: (data.results || []).map(mapToPokemonSummary),
  };
}
