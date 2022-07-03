import { parseTime } from './parseTime';

export function minizeTime(time: string): string {
  const { hours, minutes, seconds } = parseTime(time);
  const hour = `${hours > 0 ? hours + 'º' : ''}`;

  return `${hour} ${minutes}' ${seconds}"`;
}
