//function* = generator함수

//generator함수는 .next()를 붙여줘야 실행된다.
//yeild가 있는곳에서 멈추기 때문에 중단점이 있는 함수이다.
//그래서 saga에서는 while(true) 반복문도 무한반복이 되지 않는다.
//실제로 JS에서 무한의 개념을 표현하고 싶을 때 generator를 사용한다.
//또한 특정 이벤트(.next())가 실행되었을때 실행되기 때문에 EventListner로 볼수있다.
import { all, fork, takeEvery, call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
function logInAPI(data) {
  //제네레이터 아님!!
  const response = axios.post("/api/login");
  return response.data;
}
function addPostAPI(data) {
  const response = axios.post("/api/post");
  return response.data;
}
function* addPost(action) {
  yield put({
    type: "ADD_POST_REQUEST",
  });
  try {
    yield delay(1000);
    // const data = yield call(addPostAPI, action.data);
    yield put({
      type: "ADD_POST_SUCCESS",
      data,
    });
  } catch (e) {
    yield put({
      type: "ADD_POST_ERROR",
      data: e.response.data,
    });
  }
}
function* logIn(action) {
  yield put({
    type: "LOG_IN_REQUEST",
  });
  try {
    yield delay(1000);
    //const data = yield call(logInAPI, action.data);
    yield put({
      type: "LOG_IN_SUCCESS",
      data,
    });
  } catch (e) {
    yield put({
      type: "LOG_IN_ERROR",
      data: e.response.data,
    });
  }
}

function* logOut() {
  yield put({
    type: "LOG_OUT_REQUEST",
  });
  try {
    yield delay(1000);
    // const data = yield call(logInAPI);
    yield put({
      type: "LOG_OUT_SUCCESS",
      data,
    });
  } catch (e) {
    yield put({
      type: "LOG_OUT_ERROR",
      data: e.response.data,
    });
  }
}
function* watchLogin() {
  yield takeEvery("LOG_IN_REQUEST", logIn); //LOG_IN이라는 액션이 실행될때까지 기다린다. 실행되면 logIn실행
}
function* watchLogOut() {
  yield takeEvery("LOG_OUT_REQUEST", logOut);
}
function* watchAddPost() {
  yield takeEvery("ADD_POST_REQUEST", addPost);
}

export default function* rootSaga() {
  // all은 배열을 받아 한방에 실행해준다
  yield all([
    //fork는 함수를 실행한다.
    fork(watchLogin), //call이랑 구분되지만 지금은 상관없다..
    fork(watchLogin), //차이점은 call은 비동기 실행이지만, fork는 동기이다.
    fork(watchLogin),
    //한마디로 fork, call은 함수를 실행할 수 있게 해주는데 all은 그것들을 동시에 실행할 수 있게 만듬.
  ]);
}
