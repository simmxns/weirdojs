export interface Players {
  _id: string;
  position: number;
  name: string;
  stats: {
    correct: number;
    time: [number, number, number];
    points: number;
  };
  country: string;
}

export interface QuizData {
  question: string;
  answers: string[];
}

export type QuizCtx<T> = {
  answers: T;
  setAnswers: Dispatch<SetStateAction<T>>;
};

export type GameKeys = 'q' | 'w' | 'e' | 'r';
export type ControlKeys = 'space' | 'esc' | 'right' | 'left';
