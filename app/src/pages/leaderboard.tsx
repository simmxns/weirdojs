import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Leaderboard from '@/components/Leaderboard';
import * as styles from '@/styles/layouts/leaderboard.module.sass';
import StatsPanel from '@/components/StatsPanel';
import { useQuiz } from '@/hooks/useQuiz';

export default function LeaderboardPage() {
  const {
    corrects: correct,
    name: playerName,
    time,
    points: score
  } = useQuiz();

  return (
    <>
      <Helmet>
        <title>Weirdo.js | Leaderboard</title>
        <meta
          name="description"
          content="Leaderboard page, list of all players"
        />
      </Helmet>
      <Header view="leaderboard" />
      <main className={styles.leaderboardHero}>
        <div className={styles.leaderboardContent}>
          <h1 className={styles.leaderboardTitle}>Leaderboard</h1>
          <Leaderboard />
        </div>
        <StatsPanel
          correct={correct}
          playerName={playerName}
          position={2}
          score={score}
          time={time}
        />
      </main>
    </>
  );
}
