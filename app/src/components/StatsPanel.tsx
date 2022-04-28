import { FunctionComponent } from 'react';
import * as styles from '@/styles/components/StatsPanel.module.sass'

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
      <h3 className={styles.statsPanelCongrats}><strong>Congratulations</strong>, {playerName} 🎉</h3>
      <div className={styles.statsWrapper}>
      <div className={styles.statsCircle}>
        <h6 className={styles.statsPanelStats}><b>{position}</b></h6>
      </div>
      <div className={styles.statsCircle}>
        <h6 className={styles.statsPanelStats}><b>{correct}/20</b></h6>
      </div>
      <div className={styles.statsCircle}>
        <h6 className={styles.statsPanelStats}><b>{`${time[0] > 0 ? time[0] + 'º' : ''} ${time[1]}' ${time[2]}"`}</b></h6>
      </div>

      </div>
      <h4 className={styles.statsPanelScore}><b>{score}</b></h4>
    </div>
  );
};

export default StatsPanel;
