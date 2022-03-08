import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { waypointsReducer } from './waypointsReducer';
import { waypointsWatcher } from '../saga/waypoints';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  waypointsReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(waypointsWatcher);
