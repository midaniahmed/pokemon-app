export interface BaseStats {
  name: string;
  value: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapToBaseStat(data: any): BaseStats {
  return {
    name: data.stat.name,
    value: data.base_stat,
  };
}
