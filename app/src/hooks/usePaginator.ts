import { useState } from 'react';

export const usePaginator = function <T>(arr: T[], rows: number) {
  const [current, setCurrent] = useState(1);

  const start = (current - 1) * rows;
  const end = current * rows;
  const pages = Math.ceil(arr.length / rows);
  const paginated = arr.slice(start, end);

  const increase = () => {
    if (current < pages) setCurrent(current + 1);
  };
  const decrease = () => {
    if (current > 1) setCurrent(current - 1);
  };

  return {
    current,
    increase,
    decrease,
    paginated
  };
};
