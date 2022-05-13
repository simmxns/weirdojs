import Header from '@/components/Header';
import * as styles from '@/styles/layouts/quiz.module.sass';
import Pill from '@/components/Pills';
import quizObj from '@/assets/quizObj';
import { createRef, useEffect, useState } from 'react';
import GlassLayout from '@/components/GlassLayout';
import AnswerButton from '@/components/AnswerButton';
import QuestionCode from '@/components/QuestionCode';

const FinishGame = (index: number) => {
  if (index === 21) alert('the game has finished');
};

export default function QuizPage() {
  const [index, setIndex] = useState(1);
  const ref = createRef<HTMLParagraphElement>()

  const callbackHandler = () => {
    setIndex(index + 1);
    console.log(ref.current)
  };

  useEffect(() => {
  });

  return (
    <>
      <Header />
      <main className={styles.quizHero}>
        <section className={styles.questionBody}>
          <div className={styles.pillWrapper}>
            <Pill.TaskPill current={index} />
            <Pill.TimerPill />
          </div>
          <div className={styles.questionsWrapper}>
            <QuestionCode snippet={quizObj[index].question} />
          </div>
        </section>
        <section className={styles.answersBody}>
          <GlassLayout>
            <div className={styles.answersGlass}>
              <h6 className={styles.answersTitle}>Select an anwser</h6>
              <div className={styles.answersButtons}>
                <AnswerButton
                  ref={ref}
                  answer={quizObj[index].answers[0]}
                  keyType="q"
                  callback={callbackHandler}
                />
                <AnswerButton
                  ref={ref}
                  answer={quizObj[index].answers[1]}
                  keyType="w"
                  callback={callbackHandler}
                />
                <AnswerButton
                  ref={ref}
                  answer={quizObj[index].answers[2]}
                  keyType="e"
                  callback={callbackHandler}
                />
                <AnswerButton
                  ref={ref}
                  answer={quizObj[index].answers[3]}
                  keyType="r"
                  callback={callbackHandler}
                />
              </div>
            </div>
          </GlassLayout>
        </section>
      </main>
    </>
  );
}
