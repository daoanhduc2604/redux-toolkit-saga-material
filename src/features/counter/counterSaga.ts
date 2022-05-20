import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { increment, incrementSaga, incrementSagaSuccess } from './counterSlice';

export function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('wait 2s', action);
  //wait 2s
  yield delay(2000);
  console.log('wait done', action);
  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log('counterSaga');
  yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
