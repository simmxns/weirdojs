import { QuizContext } from '@/context/QuizContext';
import { useContext, useState } from 'react';

export const useQuiz = function () {
  const ctx = useContext(QuizContext);
  const [index, setIndex] = useState(0);
  const { answers, setAnswers } = ctx;
  const TOTAL_QUESTION = 19;

  if (!ctx) {
    throw new Error(
      'you can only use context inside components that have Context.Provider as parent'
    );
  }

  const collectAnswers = (answer: string): void => {
    if (answers.length <= TOTAL_QUESTION) {
      setAnswers([...answers, answer]);
    }
  };

  const resetCollection = (): void => setAnswers([]);

  const increase = () => {
    if (index < TOTAL_QUESTION) setIndex(index + 1);
  };

  const finishGame = () => {
    if (answers.length === 20) {
      alert('the game has finished');
    }
  };

  return {
    answers,
    collectAnswers,
    resetCollection,
    finishGame,
    increase,
    index
  };
};
