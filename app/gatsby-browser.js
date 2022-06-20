import QuizProvider from '@/context/QuizContext';
import '@/styles/main.sass';

export const wrapRootElement = ({ element }) => (
  <QuizProvider>{element}</QuizProvider>
);
