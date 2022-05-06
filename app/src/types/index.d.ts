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
