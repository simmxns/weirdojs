import { useMemo, useReducer } from 'react';
import { RequestContext } from './RequestContext';
import { RequestReducer } from './RequestReducer';
import type { Reducer, FunctionComponent } from 'react';
import type { RequestAction, RequestState } from '@/types';

const RequestProvider: FunctionComponent = function ({ children }) {
  const initialState = {
    name: '',
    country: '',
    stats: {
      corrects: 0,
      time: '',
      points: 0
    }
  };

  const [state, dispatch] = useReducer<Reducer<RequestState, RequestAction>>(
    RequestReducer,
    initialState
  );

  const collectReachedTime = () => {};
  const collectCorrects = () => {};
  const collectPlayerName = () => {};

  const value = useMemo<RequestState>(() => state, [state]);

  return (
    <RequestContext.Provider value={value}>{children}</RequestContext.Provider>
  );
};

export default RequestProvider;
