import { useMemo } from 'react';
import type { PokemonDetailsData } from '../../core/models';
import { Spinner, Tag } from '../shared';
import { POKEMON_CLASSES } from '../../core/constants';
import { PokemonStats } from './PokemonStats';

interface PokemonDetailsProps {
  pokemon: PokemonDetailsData | undefined;
}
export function PokemonDetails({ pokemon }: PokemonDetailsProps) {
  const typeClasses = useMemo(() => POKEMON_CLASSES[pokemon?.type as keyof typeof POKEMON_CLASSES] || POKEMON_CLASSES.default, [pokemon?.type]);

  if (!pokemon) return <Spinner />;

  return (
    <div className="max-w-2xl mx-auto">
      <div className={`${typeClasses.bg} rounded-2xl shadow-lg overflow-hidden`}>
        <div className={`inset-0 bg-gradient-to-br ${typeClasses.gradient} px-6 py-8 relative`}>
          <div className="flex items-center justify-between">
            <div className="text-gray-700 font-medium text-sm">#{pokemon.id.toString().padStart(3, '0')}</div>
            <div className={`${typeClasses.bg} rounded-full w-16 h-16 flex items-center justify-center`} aria-label={`Type: ${pokemon?.type || 'Unknown'}`}>
              <span aria-hidden="true" className="text-4xl">
                {typeClasses.icon}
              </span>
            </div>
          </div>

          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="bg-gray-100 rounded-full w-32 h-32 flex items-center justify-center shadow-md">
              <div className="relative">
                <img src={pokemon?.imageUrl} alt={pokemon.name} width={100} height={100} className="rounded-lg object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-24 pb-6 px-6 ">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">{pokemon?.name}</h2>
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Physical Stats</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Height:</span>
                    <span className="font-medium">{pokemon.height / 10} m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weight:</span>
                    <span className="font-medium">{pokemon.weight / 10} kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Experience:</span>
                    <span className="font-medium">{pokemon.baseExperience}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Types</h3>
                <div className="flex flex-wrap gap-2">
                  {pokemon.types.map((type) => (
                    <Tag key={type} className={typeClasses.badge} label={type} />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Abilities</h3>
              <div className="flex flex-wrap gap-2">
                {pokemon.abilities.map((ability) => (
                  <Tag key={ability} className={typeClasses.badge} label={ability} />
                ))}
              </div>
            </div>

            <div className="mt-8">
              <PokemonStats stats={pokemon.stats} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
