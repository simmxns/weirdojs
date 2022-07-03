import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Badges from '@/components/Badges';
import GlassLayout from '@/components/GlassLayout';
import AnswerButton from '@/components/AnswerButton';
import QuestionCode from '@/components/QuestionCode';
import PromptModal from '@/components/PromptModal';
import { useQuiz } from '@/hooks/useQuiz';
import quizObj from '@/assets/quiz.json';
import keyResolver from '@/assets/keys.json';
import type { ControlKeys, GameKeys } from '@/types';
import * as styles from '@/styles/layouts/quiz.module.sass';

export default function QuizPage() {
  const { finishGame, startGame, finished, current, nextQuestion } = useQuiz();

  const callbackHandler = () => nextQuestion();

  useEffect(() => {
    finishGame();
  }, [finishGame]);

  useEffect(() => {
    startGame();
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
          <div className={styles.badgeWrapper}>
            <Badges.TaskBadge current={current + 1} />
            <Badges.TimerBadge stop={finished} />
          </div>
          <div className={styles.questionsWrapper}>
            <QuestionCode snippet={quizObj[current]?.question} />
          </div>
        </section>
        <section className={styles.answersBody}>
          <GlassLayout>
            <div className={styles.answersGlass}>
              <h6 className={styles.answersTitle}>Select an anwser</h6>
              <div className={styles.answersButtons}>
                {quizObj[current]?.answers.map((answer, i) => {
                  return (
                    <AnswerButton
                      key={i}
                      answer={answer}
                      keyType={keyResolver[i] as GameKeys | ControlKeys}
                      stop={finished}
                      callback={callbackHandler}
                    />
                  );
                })}
              </div>
            </div>
          </GlassLayout>
        </section>
        <PromptModal show={finished} placeholder={'Anonymous#3'} />
      </main>
    </>
  );
}
