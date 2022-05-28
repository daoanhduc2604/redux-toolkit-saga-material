import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

export function* handleIncrementSaga(action: PayloadAction<number>) {
  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log('counterSaga');
  yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
