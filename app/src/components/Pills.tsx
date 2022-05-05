import * as styles from '@/styles/components/Pill.module.sass';
import { FunctionComponent } from 'react';
import { TimerIcon } from './Icons';

interface PropTypes {
  type: 'timer' | 'tasks';
}

const Pill: FunctionComponent<PropTypes> = function ({ type }) {
  if (type === 'tasks') {
    return (
      <div className={styles.pillBody}>
        <p className={styles.taskText}>1 / 20</p>
      </div>
    );
  }

  return (
    <div className={styles.pillBody}>
      <p className={styles.timerText}>00:00</p>
      <TimerIcon />
    </div>
  );
};

export default Pill;
