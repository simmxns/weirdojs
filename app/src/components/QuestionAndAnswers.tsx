import { useState } from 'react';
import GlassLayout from './GlassLayout';
import Pill from './Pills';
import QuestionCode from './QuestionCode';
import * as styles from '@/styles/components/QuestionAndAnswers.module.sass';
import AnswerButton from './AnswerButton';
import quizObj from '@/assets/quizObj';

export default function QuestionAndAnswers() {
  const [index, setIndex] = useState(0);

  const callbackHandler = () => {
    setIndex(index + 1);
  };

  return (
    <>
      <section className={styles.questionBody}>
        <div className={styles.pillWrapper}>
          <Pill.TaskPill current={index + 1} />
          <Pill.TimerPill />
        </div>
        <div className={styles.answerWrapper}>
          <QuestionCode snippet={quizObj[index].question} />
        </div>
      </section>
      <section className={styles.answersBody}>
        <GlassLayout>
          <div className={styles.answersGlass}>
            <h6 className={styles.answersTitle}>Select an anwser</h6>
            <div className={styles.answersButtons}>
              <AnswerButton
                answer={quizObj[index].answers[0]}
                keyType="q"
                callback={callbackHandler}
              />
              <AnswerButton
                answer={quizObj[index].answers[1]}
                keyType="w"
                callback={callbackHandler}
              />
              <AnswerButton
                answer={quizObj[index].answers[2]}
                keyType="e"
                callback={callbackHandler}
              />
              <AnswerButton
                answer={quizObj[index].answers[3]}
                keyType="r"
                callback={callbackHandler}
              />
            </div>
          </div>
        </GlassLayout>
      </section>
    </>
  );
}
