export interface RequestState {
  name: string | unknown;
  country: string | unknown;
  stats: {
    corrects: number | unknown;
    time: string | unknown;
    points: number | unknown;
  };
}

export interface RequestAction {
  type: 'GET_TIME' | 'GET_CORRECTS' | 'GET_NAME' | 'GET_COUNTRY' | 'SET_POINTS';
  payload: unknown;
}

export type Players = RequestState & {
  _id: string;
  position: number;
};

export interface QuizState {
  answers: string[];
  corrects: number;
  incorrects: number;
  points: number;
  time: string;
}

export interface QuizCtx {
  quizState: QuizState;
  setQuizState: Dispatch<SetStateAction<T>>;
}

export type GameKeys = 'q' | 'w' | 'e' | 'r';
export type ControlKeys = 'space' | 'esc' | 'right' | 'left';
