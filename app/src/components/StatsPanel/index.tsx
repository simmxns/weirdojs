import { FunctionComponent } from 'react';
import * as styles from '@/styles/components/StatsPanel.module.sass';
import { minizeTime } from '@/helpers/minizeTime';
import CirclePercent from './CirclePercent';
import { parseTime } from '@/helpers/parseTime';

interface PropTypes {
  playerName: string;
  position: number;
  correct: number;
  time: string;
  score: number;
}

const StatsPanel: FunctionComponent<PropTypes> = function ({
  playerName,
  time,
  score,
  correct,
  position
}) {
  const { hours, seconds, minutes } = parseTime(time);

  return (
    <div className={styles.statsPanelBody}>
      <div className={styles.statsPanelWrapper}>
        <h3 className={styles.statsPanelCongrats}>
          <strong>Congratulations</strong>, {playerName} 🎉
        </h3>
        <div className={styles.statsWrapper}>
          <div className={styles.statsCircleWrapper}>
            <CirclePercent content={`${position}º`} limit={5} />
            <p className={styles.statsSubtitle}>
              From <b>25</b> players you reach the <b>{position}º</b> position
            </p>
          </div>
          <div className={styles.statsCircleWrapper}>
            <CirclePercent content={`${correct}/20`} limit={85} />
            <p className={styles.statsSubtitle}>
              You answered <b>{85}%</b> of the questions correctly
            </p>
          </div>
          <div className={styles.statsCircleWrapper}>
            <CirclePercent content={minizeTime(time)} limit={20} />
            <p className={styles.statsSubtitle}>
              You did it in a time of{' '}
              <b>
                {hours > 0 ? `${hours} hrs, ` : ''}
                {minutes} min and {seconds} sec
              </b>
            </p>
          </div>
        </div>
        <div className={styles.statsPanelScore}>
          <b>{score}</b>
          <p className={styles.scoreSubtitle}>
            To reach a total of <b>{score}</b> points
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
