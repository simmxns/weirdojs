import { sortPlayersByScore } from '@/helpers/sortByScore';
import { usePaginator } from '@/hooks/usePaginator';
import { getPlayers } from '@/services/getPlayers';
import * as styles from '@/styles/components/Leaderboard.module.sass';
import { Players } from '@/types';
import { ReactElement, useEffect, useState } from 'react';
import KeyButton from '../KeyButton';
import LongCard from './LongCard';
import LongCardLoading from './LongCardLoading';

export default function Leaderboard(): ReactElement {
  const [isLoading, setIsLoading] = useState(true);
  const [players, setPlayers] = useState<Players[]>([]);
  const { increase, decrease, paginated } = usePaginator(players, 6);

  useEffect(() => {
    getPlayers().then(players => {
      const sorted = sortPlayersByScore(players);
      setPlayers(sorted);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <ol className={styles.leaderboardGrid}>
        {isLoading ? (
          <LongCardLoading />
        ) : (
          paginated.map((e, i) => {
            const { name, stats, country } = e;
            return (
              <li>
                <LongCard
                  index={(i += 1)}
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
