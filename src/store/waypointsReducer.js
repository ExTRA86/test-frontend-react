const defaultWaypoints = {
  start: [],
  end: [],
};

export const ADD_START_POINT = 'ADD_START_POINT';
export const ADD_END_POINT = 'ADD_END_POINT';

export const ASYNC_ADD_START_POINT = 'ASYNC_ADD_START_POINT';
export const ASYNC_ADD_END_POINT = 'ASYNC_ADD_END_POINT';

export const waypointsReducer = (state = defaultWaypoints, action) => {
  switch (action.type) {
    case ADD_START_POINT:
      return { ...state, start: action.payload };
    case ADD_END_POINT:
      return { ...state, end: action.payload };
    default:
      return state;
  }
};
