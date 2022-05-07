import Header from '@/components/Header';
import * as styles from '@/styles/layouts/quiz.module.sass';
import Questions from '@/components/Quiz/Questions';
import Pill from '@/components/Pills'
import Answers from '@/components/Quiz/Answers';
import quizObj from '@/assets/quizObj';
import { useState } from 'react';

export default function QuizPage() {
  const [index, setIndex] = useState(0);

  const callbackHandler = () => {
    setIndex(index + 1);
  };

  return (
    <>
      <Header />
      <main className={styles.quizHero}>
      <section className={styles.questionBody}>
        <div className={styles.pillWrapper}>
          <Pill.TaskPill current={index + 1} />
          <Pill.TimerPill />
        </div>
        <Questions obj={quizObj} index={index} />
      </section>
      <section className={styles.answersBody}>
        <Answers obj={quizObj} index={index} callback={callbackHandler} />
      </section>
      </main>
    </>
  );
}
