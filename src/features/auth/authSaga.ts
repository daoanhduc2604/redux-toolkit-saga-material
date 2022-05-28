import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, delay, fork, put, take } from 'redux-saga/effects';
import { authActions, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  try {
    yield delay(300);
    //   yield call(api, payload);
    console.log('login', payload);
    localStorage.setItem('access_token', JSON.stringify(payload));

    yield put(
      authActions.loginSuccess({
        id: 1,
        name: 'Easy Frontend',
      })
    );
  } catch (error) {
    authActions.loginFailed('Login Failed');
  }
}

function* handleLogout() {
  yield delay(300);
  console.log('logout');
  localStorage.removeItem('access_token');
}

function* watchLoginFlow() {
  while (true) {
    console.log('watchLoginFlow');
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}
export default function* authSaga() {
  yield fork(watchLoginFlow);
  yield all([]);
}
