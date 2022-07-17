import { Player } from '@/types';

export function sortPlayersByScore(players: Player[]): Player[] {
  return Object.entries(players)
    .sort((a, b) => {
      const { points: scoreA } = a[1].stats;
      const { points: scoreB } = b[1].stats;
      return scoreB - scoreA;
    })
    .map((e, i) => ({
      ...e[1],
      position: (i += 1)
    }));
}
