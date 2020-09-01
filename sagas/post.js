import axios from "axios";
<<<<<<< HEAD
<<<<<<< HEAD
import { all, fork, takeEvery, call, put } from "redux-saga/effects";
=======
import { all, fork, takeEvery, call, put, delay } from "redux-saga/effects";
>>>>>>> parent of b015e22... 0.2.0 팔로우 & 언팔기능 추가, 무한스크롤 적용
=======
import { all, fork, takeEvery, call, put, delay } from "redux-saga/effects";
>>>>>>> parent of b015e22... 0.2.0 팔로우 & 언팔기능 추가, 무한스크롤 적용
import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_POST_REQUEST,
  ADD_POST_FAILURE,
  ADD_POST_SUCCESS,
<<<<<<< HEAD
} from "../reducers/post";
=======
  REMOVE_POST_FAILURE,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_REQUEST,
} from "../reducers/post";
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";
import shortid from "shortid";
<<<<<<< HEAD
>>>>>>> parent of b015e22... 0.2.0 팔로우 & 언팔기능 추가, 무한스크롤 적용
=======
>>>>>>> parent of b015e22... 0.2.0 팔로우 & 언팔기능 추가, 무한스크롤 적용

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
<<<<<<< HEAD
<<<<<<< HEAD
  yield all([fork(watchAddPost), fork(watchAddComment)]);
=======
  yield all([fork(watchAddComment), fork(watchAddPost), fork(watchRemovePost)]);
>>>>>>> parent of b015e22... 0.2.0 팔로우 & 언팔기능 추가, 무한스크롤 적용
=======
  yield all([fork(watchAddComment), fork(watchAddPost), fork(watchRemovePost)]);
>>>>>>> parent of b015e22... 0.2.0 팔로우 & 언팔기능 추가, 무한스크롤 적용
}
