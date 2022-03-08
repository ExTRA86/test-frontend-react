import { put, takeEvery } from 'redux-saga/effects';
import { addStartPoint, addEndPoint } from './../store/actionCreators';
import {
  ASYNC_ADD_START_POINT,
  ASYNC_ADD_END_POINT,
} from './../store/waypointsReducer';

function* startWorker() {
  yield put(addStartPoint());
}

function* endWorker() {
  yield put(addEndPoint());
}

export function* waypointsWatcher() {
  yield takeEvery(ASYNC_ADD_START_POINT, startWorker);
  yield takeEvery(ASYNC_ADD_END_POINT, endWorker);
}
