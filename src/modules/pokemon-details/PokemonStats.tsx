import type { BaseStats } from '../../core/models';

interface PokemonStatsProps {
  stats: BaseStats[];
}

export const PokemonStats: React.FC<PokemonStatsProps> = ({ stats }) => {
  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">Base Stats</h3>
      <div className="space-y-3">
        {stats.map((stat) => (
          <div key={stat.name} className="flex items-center">
            <div className="w-32 text-sm font-medium capitalize text-gray-700">{stat.name}</div>
            <div className="flex-1 mx-4">
              <div className="bg-gray-200 rounded-full h-2">
                <div
                  data-testid="stat-bar"
                  role="presentation"
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min((stat.value / 255) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
            <div className="w-12 text-sm font-semibold text-gray-900">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
