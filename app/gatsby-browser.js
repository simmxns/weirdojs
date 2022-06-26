import React from 'react';
import QuizProvider from '@/context/QuizContext';
import RequestProvider from '@/context/Request/RequestContext';
import '@/styles/main.sass';

export const wrapRootElement = ({ element }) => (
  <React.StrictMode>
    <QuizProvider>{element}</QuizProvider>
  </React.StrictMode>
);
