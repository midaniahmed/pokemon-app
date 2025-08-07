import { useState } from 'react';
import { parseErrorMessage, useGetPokemonListQuery } from '../../core/services';
import { Button, Modal, PageTemplate } from '../shared';
import { PokemonCard } from './PokemonCard';
import { PokemonDetails } from '../pokemon-details/PokemonDetails';
import type { PokemonDetailsData } from '../../core/models';

export interface PokemonListProps {
  onPick: (name: string) => void;
  selectedName: string | null;
}

const LIMIT = 40;
export const PokemonList: React.FC = () => {
  const [queryArgs, setQueryArgs] = useState({ limit: LIMIT, offset: 0 });

  const [isOpen, setOpenModal] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsData | undefined>(undefined);
  const { data, isLoading, isError, error, isFetching } = useGetPokemonListQuery(queryArgs);

  const handleClickPokemon = (pokemon: PokemonDetailsData) => {
    setOpenModal(true);
    setPokemonDetails(pokemon);
  };

  const loadMore = async () => {
    setQueryArgs((prev) => ({ ...prev, offset: prev.offset + LIMIT }));
  };

  return (
    <PageTemplate
      error={isError ? parseErrorMessage(error) : undefined}
      isLoading={isLoading}
      emptyState={{ show: !data?.list?.length, title: 'No pokemon found.', description: 'Refresh your list' }}
    >
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Pokemon Collection</h2>
        <p className="text-gray-600 text-lg">Discover amazing Pokemon and explore their unique abilities</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-3">
        {data?.list.map((pokemon, index) => (
          <div key={pokemon.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 5}ms` }}>
            <PokemonCard pokemon={pokemon} onClick={handleClickPokemon} />
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center">
        <Button onClick={loadMore} disabled={isFetching || !data?.hasMore} size="lg">
          {isFetching ? 'Loading...' : data?.hasMore ? 'Next Page' : 'No more Pokémon'}
        </Button>
      </div>
      <Modal isOpen={isOpen} onClose={() => setOpenModal(false)}>
        <PokemonDetails pokemon={pokemonDetails} />
      </Modal>
    </PageTemplate>
  );
};
