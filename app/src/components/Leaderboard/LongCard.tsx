import { FunctionComponent } from 'react';
import * as styles from '@/styles/components/Leaderboard.module.sass';
import { minizeTime } from '@/helpers/minizeTime';

interface PropTypes {
  country: string;
  playerName: string;
  stats: {
    time: [number, number, number];
    correct: number;
    points: number;
  };
  index: number;
}

const LongCard: FunctionComponent<PropTypes> = function ({
  country,
  playerName,
  stats,
  index
}) {
  return (
    <div className={styles.longCardBody}>
      <div className={styles.leftSideWrapper}>
        <p className={styles.incrementer}>{index}</p>
        <img
          src={`https://countryflagsapi.com/png/${country}`}
          className={styles.longCardImg}
          alt="a flag of a country"
        />
        <h6>{playerName}</h6>
      </div>
      <div className={styles.rightSideWrapper}>
        <div className={styles.timeCorrectWrapper}>
          <p>{minizeTime(stats.time)}</p>
          <p>{stats.correct}/20</p>
        </div>
        <h6>{stats.points}</h6>
      </div>
    </div>
  );
};

export default LongCard;
