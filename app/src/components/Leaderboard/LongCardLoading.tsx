import { ReactElement } from 'react';
import * as styles from '@/styles/components/Leaderboard.module.sass';

export default function LongCardLoading(): ReactElement {
  return (
    <div className={styles.longCardBody}>
      <div className={styles.longCardLoadingHero}>
        <p>Loading...</p>
      </div>
    </div>
  );
}
