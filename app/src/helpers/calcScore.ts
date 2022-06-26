import { parseTime } from './parseTime';

export function calcScore(time: string, corrects: number, incorrects: number) {
  const CORRECTS_POINTS = 600;
  const INCORRECTS_POINTS = 300;
  const GIVEN_TIME_POINTS = 10000;
  const TIME_POINTS = {
    HOUR: 2500,
    MIN: 30,
    SEC: 5
  };

  const { hours, minutes, seconds } = parseTime(time);
  const scorePoints =
    corrects * CORRECTS_POINTS - incorrects * INCORRECTS_POINTS;
  const scoreTime =
    GIVEN_TIME_POINTS -
    (hours * TIME_POINTS.HOUR -
      minutes * TIME_POINTS.MIN -
      seconds * TIME_POINTS.SEC);
  const finalScore = scorePoints - scoreTime;

  return finalScore < 0 ? 0 : finalScore;
}
