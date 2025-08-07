import { memo, useMemo } from 'react';
import { Card, Spinner, Tag } from '../shared';
import PokemonBallImage from '../../assets/pokemon-ball.png';
import type { PokemonDetailsData, PokemonSummary } from '../../core/models';
import { useGetPokemonDetailQuery } from '../../core/services';
import { POKEMON_CLASSES } from '../../core/constants';

interface PokemonCardProps {
  pokemon: PokemonSummary;
  onClick: (pokemon: PokemonDetailsData) => void;
}

export const PokemonCard = memo(({ pokemon, onClick }: PokemonCardProps) => {
  const { data: pokemonDetail, isLoading, isError } = useGetPokemonDetailQuery(pokemon.id);

  const typeClasses = useMemo(() => POKEMON_CLASSES[pokemonDetail?.type as keyof typeof POKEMON_CLASSES] || POKEMON_CLASSES.default, [pokemonDetail?.type]);

  const handleClick = () => {
    if (pokemonDetail) {
      onClick(pokemonDetail);
    }
  };

  const renderImage = () => {
    if (isLoading) return <Spinner aria-label="Loading Pokemon details" />;

    if (isError)
      return (
        <div className="text-gray-400 text-xs" role="alert" aria-label={`Error loading details for ${pokemon.name}`}>
          Error
        </div>
      );

    return (
      <img
        src={pokemonDetail?.imageUrl || PokemonBallImage}
        alt={pokemonDetail?.name || pokemon.name}
        width={72}
        height={72}
        className="rounded-lg object-cover"
        loading="lazy"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = PokemonBallImage;
        }}
      />
    );
  };

  return (
    <Card
      className="cursor-pointer relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group focus-within:ring-2 focus-within:ring-blue-500 focus-within:outline-none"
      onClick={handleClick}
      aria-label={`View details for ${pokemon.name}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${typeClasses.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} aria-hidden="true" />

      <div className="relative p-4 flex items-center gap-4">
        <div className="flex-shrink-0">
          <Tag label={`#${pokemon.id.toString().padStart(3, '0')}`} className="bg-black/20 backdrop-blur-sm" />
        </div>

        <div className="flex-shrink-0 w-[72px] h-[72px] flex items-center justify-center">{renderImage()}</div>

        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-gray-800 capitalize truncate">{pokemon.name}</h3>
        </div>

        <div className="flex-shrink-0">
          <Tag label={pokemonDetail?.type || 'Unknown'} className={typeClasses.badge} extra={<span aria-hidden="true">{typeClasses.icon}</span>} />
        </div>
      </div>
    </Card>
  );
});

PokemonCard.displayName = 'PokemonCard';
