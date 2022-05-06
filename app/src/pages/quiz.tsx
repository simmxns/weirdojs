import Header from '@/components/Header';
import * as styles from '@/styles/layouts/quiz.module.sass';
import QuestionAndAnswers from '@/components/QuestionAndAnswers';

export default function QuizPage() {
  return (
    <>
      <Header />
      <main className={styles.quizHero}>
        <QuestionAndAnswers />
      </main>
    </>
  );
}
