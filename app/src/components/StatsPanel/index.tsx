import { FunctionComponent, useEffect, useRef } from 'react';
import * as styles from '@/styles/components/StatsPanel.module.sass';
import { minizeTime } from '@/helpers/minizeTime';
import CirclePercent from './CirclePercent';

interface PropTypes {
  playerName: string;
  position: number;
  correct: number;
  time: [number, number, number];
  score: number;
}

const StatsPanel: FunctionComponent<PropTypes> = function ({
  playerName,
  position,
  correct,
  time,
  score
}) {
  return (
    <div className={styles.statsPanelBody}>
      <div className={styles.statsPanelWrapper}>
        <h3 className={styles.statsPanelCongrats}>
          <strong>Congratulations</strong>, {playerName} 🎉
        </h3>
        <div className={styles.statsWrapper}>
          <div className={styles.statsCircleWrapper}>
            <CirclePercent content="1º" limit={5} />
            <p className={styles.statsSubtitle}>
              From <b>25</b> players you reach the <b>{1}º</b> position
            </p>
          </div>
          <div className={styles.statsCircleWrapper}>
            <CirclePercent content="17/20" limit={85} />
            <p className={styles.statsSubtitle}>
              You answered <b>{85}%</b> of the questions correctly
            </p>
          </div>
          <div className={styles.statsCircleWrapper}>
            <CirclePercent content={minizeTime(time)} limit={20} />
            <p className={styles.statsSubtitle}>
              You did it in a time of <b>1 min and 2 sec</b>
            </p>
          </div>
        </div>
        <div className={styles.statsPanelScore}>
          <b>{score}</b>
          <p className={styles.scoreSubtitle}>
            To reach a total of <b>3000</b> points
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
