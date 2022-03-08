import {
  ADD_END_POINT,
  ADD_START_POINT,
  ASYNC_ADD_END_POINT,
  ASYNC_ADD_START_POINT,
} from './waypointsReducer';

export const addStartPoint = payload => ({
  type: ADD_START_POINT,
  payload,
});

export const addEndPoint = payload => ({
  type: ADD_END_POINT,
  payload,
});

export const asyncAddEndPoint = () => ({ type: ASYNC_ADD_END_POINT });
export const asyncAddStartPoint = () => ({ type: ASYNC_ADD_START_POINT });
