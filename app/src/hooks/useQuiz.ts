import { useCallback, useContext, useState } from 'react';
import { QuizContext } from '@/context/QuizContext';
import { similars } from '@/helpers/similars';
import correctsJSON from '@/assets/corrects.json';
import { calcScore } from '@/helpers/calcScore';

export const useQuiz = function () {
  const ctx = useContext(QuizContext);
  const [current, setCurrent] = useState(0);
  const [finished, setFinished] = useState(false);
  const { quizState, setQuizState } = ctx;
  const { answers, time, incorrects } = quizState;
  const TOTAL_QUESTION = 19;

  if (!ctx) {
    throw new Error('The context must be used inside a Context.Provider');
  }

  const collectAnswers = (answer: string): void => {
    if (answer.length <= TOTAL_QUESTION) {
      setQuizState({
        ...quizState,
        answers: [...answers, answer]
      });
    }
  };

  const collectTime = (time: string) => {
    setQuizState({
      ...quizState,
      time
    });
  };

  const resetGame = (): void => {
    setQuizState([]);
  };

  const nextQuestion = () => {
    if (current < TOTAL_QUESTION) setCurrent(current + 1);
  };

  const startGame = () => {
    sessionStorage.setItem(
      'corrects',
      window.btoa(JSON.stringify(correctsJSON))
    );
  };

  const finishGame = useCallback(() => {
    if (answers.length === TOTAL_QUESTION + 1) {
      const sessionCorrects = JSON.parse(
        window.atob(sessionStorage.getItem('corrects') ?? '')
      );
      const corrects = similars(answers, sessionCorrects);
      const score = calcScore(time, corrects.length, incorrects);

      setQuizState({
        ...quizState,
        corrects: corrects.length,
        incorrects: answers.length - corrects.length,
        points: score
      });

      setFinished(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers]);

  return {
    collectAnswers,
    nextQuestion,
    collectTime,
    finishGame,
    startGame,
    resetGame,
    finished,
    answers,
    current
  };
};
