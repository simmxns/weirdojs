import type { RequestAction, RequestState } from '@/types';

export const RequestReducer = (state: RequestState, action: RequestAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_TIME':
      return {
        ...state,
        stats: {
          ...state.stats,
          time: payload
        }
      };
    case 'GET_CORRECTS':
      return {
        ...state,
        stats: {
          ...state.stats,
          corrects: payload
        }
      };
    case 'SET_POINTS':
      return {
        ...state,
        stats: {
          ...state.stats,
          points: payload
        }
      };
    case 'GET_NAME':
      return {
        ...state,
        name: payload
      };
    case 'GET_COUNTRY':
      return {
        ...state,
        country: payload
      };
    default:
      return state;
  }
};
