export function parseTime(time: string): {
  hours: number;
  minutes: number;
  seconds: number;
} {
  const [seconds, minutes, hours] = time.split(':').reverse();
  return {
    hours: Number(hours) || 0,
    minutes: Number(minutes) || 0,
    seconds: Number(seconds) || 0
  };
}
