import type { FunctionComponent } from 'react';
import * as styles from '@/styles/components/Leaderboard.module.sass';

interface PropTypes {
  country: string;
  playerName: string;
  stats: {
    time: string;
    corrects: number;
    points: number;
  };
  position: number;
}

const LongCard: FunctionComponent<PropTypes> = function ({
  country,
  playerName,
  stats,
  position
}) {
  return (
    <div className={styles.longCardBody}>
      <div className={styles.leftSideWrapper}>
        <p className={styles.incrementer}>{position}</p>
        <img
          src={`https://countryflagsapi.com/png/${country}`}
          className={styles.longCardImg}
          alt="a flag of a country"
        />
        <h6>{playerName}</h6>
      </div>
      <div className={styles.rightSideWrapper}>
        <div className={styles.timeCorrectWrapper}>
          <p>{stats.time}</p>
          <p>{stats.corrects}/20</p>
        </div>
        <h6>{stats.points}</h6>
      </div>
    </div>
  );
};

export default LongCard;
