export function minizeTime(time: [number, number, number]): string {
  return `${time[0] > 0 ? time[0] + 'º' : ''} ${time[1]}' ${time[2]}"`;
}
