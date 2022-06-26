import { useEffect, useState, memo, useMemo } from 'react';
import { TimerIcon } from './Icons';
import { addZero } from '@/helpers/addZero';
import * as styles from '@/styles/components/Badges.module.sass';
import { useQuiz } from '@/hooks/useQuiz';

const TaskBadge = ({ current }: TaskPropTypes) => (
  <div className={styles.pillBody}>
    <p className={styles.taskText}>{current} / 20</p>
  </div>
);

const TimerBadge = memo(({ stop }: TimerPropTypes) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const currentTime = useMemo(
    () => `${addZero(minutes)}:${addZero(seconds)}`,
    [seconds, minutes]
  );
  const { collectTime } = useQuiz();

  useEffect(() => {
    const chronometer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);

    if (stop) {
      clearInterval(chronometer);
      collectTime(currentTime);
      return;
    }

    return () => clearTimeout(chronometer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds, minutes]);

  return (
    <div className={styles.pillBody}>
      <p className={styles.timerText}>{currentTime}</p>
      <TimerIcon />
    </div>
  );
});

TimerBadge.displayName = 'TimerPill';

interface TaskPropTypes {
  current: number;
}

interface TimerPropTypes {
  stop: boolean;
}

export default { TaskBadge, TimerBadge };
