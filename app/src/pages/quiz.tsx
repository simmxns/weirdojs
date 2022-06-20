import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Pill from '@/components/Pills';
import GlassLayout from '@/components/GlassLayout';
import AnswerButton from '@/components/AnswerButton';
import QuestionCode from '@/components/QuestionCode';
import { useQuiz } from '@/hooks/useQuiz';
import quizObj from '@/assets/quiz.json';
import keyResolver from '@/assets/keys.json';
import type { ControlKeys, GameKeys } from '@/types';
import * as styles from '@/styles/layouts/quiz.module.sass';

export default function QuizPage() {
  const { resetCollection, finishGame, index, increase } = useQuiz();

  const callbackHandler = () => increase();

  finishGame();

  useEffect(() => {
    resetCollection();
  }, []);

  return (
    <>
      <Helmet>
        <title>Weirdo.js | Quiz</title>
        <meta name="description" content="Quiz page a quiz game" />
      </Helmet>
      <Header />
      <main className={styles.quizHero}>
        <section className={styles.questionBody}>
          <div className={styles.pillWrapper}>
            <Pill.TaskPill current={index + 1} />
            <Pill.TimerPill />
          </div>
          <div className={styles.questionsWrapper}>
            <QuestionCode snippet={quizObj[index]?.question} />
          </div>
        </section>
        <section className={styles.answersBody}>
          <GlassLayout>
            <div className={styles.answersGlass}>
              <h6 className={styles.answersTitle}>Select an anwser</h6>
              <div className={styles.answersButtons}>
                {quizObj[index]?.answers.map((answer, i) => {
                  return (
                    <AnswerButton
                      key={i}
                      answer={answer}
                      keyType={keyResolver[i] as GameKeys | ControlKeys}
                      callback={callbackHandler}
                    />
                  );
                })}
              </div>
            </div>
          </GlassLayout>
        </section>
      </main>
    </>
  );
}
