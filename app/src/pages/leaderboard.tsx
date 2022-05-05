import Header from '@/components/Header';
import Leaderboard from '@/components/Leaderboard';
import * as styles from '@/styles/layouts/leaderboard.module.sass';
import { Helmet } from 'react-helmet';

export default function LeaderboardPage() {
  return (
    <>
      <Helmet>
        <title>Weirdo.js | Leaderboard</title>
        <meta
          name="description"
          content="Leaderboard page, list of all players"
        />
      </Helmet>
      <Header />
      <main className={styles.leaderboardHero}>
        <div className={styles.leaderboardContent}>
          <h1 className={styles.leaderboardTitle}>Leaderboard</h1>
          <Leaderboard />
        </div>
      </main>
    </>
  );
}
