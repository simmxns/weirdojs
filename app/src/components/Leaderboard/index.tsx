import { useEffect, useState } from 'react';
import KeyButton from '../KeyButton';
import LongCard from './LongCard';
import LongCardLoading from './LongCardLoading';
import { sortPlayersByScore } from '@/helpers/sortByScore';
import { usePaginator } from '@/hooks/usePaginator';
import { getPlayers } from '@/services/getPlayers';
import type { ReactElement } from 'react';
import type { Player } from '@/types';
import * as styles from '@/styles/components/Leaderboard.module.sass';

export default function Leaderboard(): ReactElement {
  const [isLoading, setIsLoading] = useState(true);
  const [players, setPlayers] = useState<Player[]>([]);
  const { increase, decrease, paginated } = usePaginator<Player>(players, 6);

  useEffect(() => {
    getPlayers()
      .then(players => {
        const sorted = sortPlayersByScore(players);
        setPlayers(sorted);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <ol className={styles.leaderboardList}>
        {isLoading ? (
          <LongCardLoading />
        ) : (
          paginated.map(elements => {
            const { _id, position, name, stats, country } = elements;
            return (
              <li key={_id}>
                <LongCard
                  position={position}
                  country={country}
                  playerName={name}
                  stats={stats}
                />
              </li>
            );
          })
        )}
      </ol>
      <div className={styles.paginatorKeys}>
        <KeyButton keyType="left" callback={decrease} />
        <KeyButton keyType="right" callback={increase} />
      </div>
    </div>
  );
}
