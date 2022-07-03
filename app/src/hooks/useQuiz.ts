import { useCallback, useContext, useState } from 'react';
import { QuizContext } from '@/context/QuizContext';
import { similars } from '@/helpers/similars';
import correctsJSON from '@/assets/corrects.json';
import { calcScore } from '@/helpers/calcScore';
import { getCountryCode } from '@/services/getCountryCode';

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

  const collectAnswers = (answer: string) => {
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

  const collectName = async (name: string) => {
    setQuizState({
      ...quizState,
      name
    });
  };

  const resetGame = () => {
    setFinished(false);
    setQuizState({
      name: '',
      country: '',
      answers: [],
      corrects: 0,
      incorrects: 0,
      points: 0,
      time: ''
    });
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

  const finishGame = useCallback(async () => {
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
        points: score,
        country: await getCountryCode()
      });

      setFinished(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers]);

  return {
    collectAnswers,
    nextQuestion,
    ...quizState,
    collectName,
    collectTime,
    finishGame,
    startGame,
    resetGame,
    finished,
    current
  };
};
