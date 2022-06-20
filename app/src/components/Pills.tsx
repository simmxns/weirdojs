import { useEffect, useState, memo } from 'react';
import { addZero } from '@/helpers/addZero';
import { TimerIcon } from './Icons';
import * as styles from '@/styles/components/Pills.module.sass';

const TaskPill = ({ current }: PropTypes) => (
  <div className={styles.pillBody}>
    <p className={styles.taskText}>{current} / 20</p>
  </div>
);

const TimerPill = memo(() => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const chronometer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearTimeout(chronometer);
  });

  return (
    <div className={styles.pillBody}>
      <p className={styles.timerText}>
        {addZero(minutes)}:{addZero(seconds)}
      </p>
      <TimerIcon />
    </div>
  );
});

TimerPill.displayName = 'TimerPill';

interface PropTypes {
  current: number;
}

export default { TaskPill, TimerPill };
