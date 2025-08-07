export interface PokemonSummary {
  name: string;
  id: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapToPokemonSummary(data: any): PokemonSummary {
  return {
    name: data.name,
    id: extractPokemonId(data.url),
  };
}

const extractPokemonId = (url: string): string => {
  const matches = url.match(/\/pokemon\/(\d+)\//);
  return matches ? matches[1] : '';
};
