export interface Players {
  _id: string;
  name: string;
  stats: {
    correct: number;
    time: [number, number, number];
    points: number;
  };
  country: string;
}
