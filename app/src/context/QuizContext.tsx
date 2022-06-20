import { createContext, useMemo, useState } from 'react';
import type { FunctionComponent } from 'react';
import type { QuizCtx } from '@/types';

const QuizContext = createContext<QuizCtx<string[]>>({
  answers: [],
  setAnswers: () => []
});

const QuizProvider: FunctionComponent = function (props) {
  const [answers, setAnswers] = useState<string[]>([]);

  const value = useMemo(
    () => ({
      answers,
      setAnswers
    }),
    [answers]
  );

  return (
    <QuizContext.Provider value={value}>{props.children}</QuizContext.Provider>
  );
};

export { QuizProvider as default, QuizContext };
