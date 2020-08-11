import { all, fork, takeEvery, call, put, delay } from "redux-saga/effects";
import axios from "axios";
import {
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_SUCCESS,
  LOG_IN_REQUEST,
  LOG_OUT_REQUEST,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "../reducers/user";

function logInAPI(data) {
  //제네레이터 아님!!
  const response = axios.post("/api/login");
  return response.data;
}
function logOutAPI(data) {
  //제네레이터 아님!!
  const response = axios.post("/api/logOut");
  return response.data;
}
function signUpAPI(data) {
  //제네레이터 아님!!
  const response = axios.post("/api/signUp");
  return response.data;
}
function* logIn(action) {
  try {
    console.log("saga logIn");
    yield delay(1000);
    //const data = yield call(logInAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: LOG_IN_FAILURE,
      error: e.response.data,
    });
  }
}

function* logOut() {
  try {
    yield delay(1000);
    // const data = yield call(signUpAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: e.response.data,
    });
  }
}
function* signUp(action) {
  try {
    console.log("saga signup");
    yield delay(1000);
    //const data = yield call(logOutAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: e.response.data,
    });
  }
}
function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, logIn); //LOG_IN이라는 액션이 실행될때까지 기다린다. 실행되면 logIn실행
}

function* watchLogOut() {
  yield takeEvery(LOG_OUT_REQUEST, logOut);
}
function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signup); //LOG_IN이라는 액션이 실행될때까지 기다린다. 실행되면 logIn실행
}
export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogOut)]);
}
