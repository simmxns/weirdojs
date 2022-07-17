import { createContext, useMemo, useState } from 'react';
import type { FunctionComponent } from 'react';
import type { QuizCtx, QuizState } from '@/types';

const QuizContext = createContext<QuizCtx>({
  quizState: {
    name: '',
    country: '',
    answers: [],
    corrects: 0,
    incorrects: 0,
    points: 0,
    time: '',
    position: 0
  },
  setQuizState: () => {}
});

const QuizProvider: FunctionComponent = function ({ children }) {
  const [quizState, setQuizState] = useState<QuizState>({
    name: '',
    country: '',
    answers: [],
    corrects: 0,
    incorrects: 0,
    points: 0,
    time: '',
    position: 0
  });

  const value = useMemo(
    () => ({
      quizState,
      setQuizState
    }),
    [quizState]
  );

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export { QuizProvider as default, QuizContext };
