import { createContext } from 'react';
import type { RequestState } from '@/types';

export const RequestContext = createContext<RequestState>({
  name: '',
  country: '',
  stats: {
    corrects: 0,
    time: '',
    points: 0
  }
});
