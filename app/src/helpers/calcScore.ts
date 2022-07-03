import { parseTime } from './parseTime';

export function calcScore(time: string, corrects: number, incorrects: number) {
  const { hours, minutes, seconds } = parseTime(time);

  const discountedTime = Math.abs(
    seconds * ScorePoints.SEC -
      minutes * ScorePoints.MIN -
      hours * ScorePoints.HOUR
  );
  const scorePoints =
    corrects * ScorePoints.CORRECTS - incorrects * ScorePoints.INCORRECTS;
  const scoreTime = ScorePoints.GIVEN_TIME - discountedTime;
  const finalScore = scorePoints + scoreTime;

  return finalScore;
}

enum ScorePoints {
  CORRECTS = 600,
  INCORRECTS = 300,
  GIVEN_TIME = 10000,
  HOUR = 1500,
  MIN = 60,
  SEC = 15
}
