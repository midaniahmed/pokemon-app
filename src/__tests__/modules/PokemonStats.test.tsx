import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import type { BaseStats } from '../../core/models';
import { PokemonStats } from '../../modules/pokemon-details/PokemonStats';

describe('PokemonStats Component', () => {
  const sampleStats: BaseStats[] = [
    { name: 'hp', value: 100 },
    { name: 'attack', value: 200 },
    { name: 'speed', value: 300 },
  ];

  it('renders the heading', () => {
    render(<PokemonStats stats={sampleStats} />);
    expect(screen.getByRole('heading', { name: /base stats/i })).toBeInTheDocument();
  });

  it('renders each stat name capitalized', () => {
    render(<PokemonStats stats={sampleStats} />);
    sampleStats.forEach((stat) => {
      expect(screen.getByText(stat.name, { exact: false })).toBeInTheDocument();
    });
  });

  it('renders the correct stat values', () => {
    render(<PokemonStats stats={sampleStats} />);
    sampleStats.forEach((stat) => {
      expect(screen.getByText(String(stat.value))).toBeInTheDocument();
    });
  });

  it('renders progress bars with correct width percentages', () => {
    render(<PokemonStats stats={sampleStats} />);

    const bars = screen.getAllByTestId('stat-bar');
    const expectedWidths = [`${(100 / 255) * 100}%`, `${(200 / 255) * 100}%`, '100%'];

    bars.forEach((bar, index) => {
      expect(bar).toHaveStyle({ width: expectedWidths[index] });
    });
  });
});

describe('PokemonStats Integration', () => {
  it('displays multiple stats together correctly', () => {
    const stats: BaseStats[] = [
      { name: 'hp', value: 50 },
      { name: 'defense', value: 120 },
    ];
    render(<PokemonStats stats={stats} />);

    stats.forEach((stat) => {
      expect(screen.getByText(stat.name, { exact: false })).toBeInTheDocument();
      expect(screen.getByText(String(stat.value))).toBeInTheDocument();
    });

    expect(screen.getAllByRole('presentation')).toHaveLength(stats.length);
  });
});
