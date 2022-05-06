export function addZero(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}
