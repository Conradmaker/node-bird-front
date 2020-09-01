import axios from "axios";
import { all, fork, takeEvery, call, put } from "redux-saga/effects";
import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_POST_REQUEST,
  ADD_POST_FAILURE,
  ADD_POST_SUCCESS,
} from "../reducers/post";

function addPostAPI(data) {
  const response = axios.post("/api/post");
  return response.data;
}
function addCommentAPI(data) {
  const response = axios.post(`/api/post/${data.postId}/comment`, data);
  return response.data;
}
function* addPost(action) {
  yield put({
    type: ADD_POST_REQUEST,
  });
  try {
    yield delay(1000);
    // const data = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data,
    });
  } catch (e) {
    yield put({
      type: ADD_POST_FAILURE,
      data: e.response.data,
    });
  }
}
function* addComment(action) {
  yield put({
    type: ADD_COMMENT_REQUEST,
  });
  try {
    yield delay(1000);
    // const data = yield call(addCOMMENTAPI, action.data);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data,
    });
  } catch (e) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: e.response.data,
    });
  }
}
function* watchAddPost() {
  yield takeEvery("ADD_POST_REQUEST", addPost);
}
function* watchAddComment() {
  yield takeEvery("ADD_COMMENT_REQUEST", addComment);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchAddComment)]);
}
