export interface RequestState {
  name: string | unknown;
  country: string | unknown;
  createdAt: Date | unknown;
  stats: {
    corrects: number | unknown;
    time: string | unknown;
    points: number | unknown;
  };
}

export type Player = RequestState & {
  _id?: string;
};

export interface QuizState {
  name: string;
  country: string;
  answers: string[];
  corrects: number;
  incorrects: number;
  points: number;
  time: string;
  position: number;
  createdAt: Date
}

export interface QuizCtx {
  quizState: QuizState;
  setQuizState: Dispatch<SetStateAction<T>>;
}

export type GameKeys = 'q' | 'w' | 'e' | 'r';
export type ControlKeys = 'space' | 'esc' | 'right' | 'left';
