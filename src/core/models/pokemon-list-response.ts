import { mapToPokemonSummary, type PokemonSummary } from './pokemon-summary.model';

export interface PokemonListResponse {
  totalCount: number;
  list: PokemonSummary[];
  hasMore?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapPokemonPaginatedList(data: any, offset = 0): PokemonListResponse {
  return {
    totalCount: data.count,
    list: (data.results || []).map(mapToPokemonSummary),
    hasMore: data.count >= offset,
  };
}
