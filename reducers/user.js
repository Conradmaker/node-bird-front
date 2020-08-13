import produce from "immer";

export const LOG_IN_REQUEST = "users/LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "users/LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "users/LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "users/LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "users/LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "users/LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "users/SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "users/SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "users/SIGN_UP_FAILURE";

export const FOLLOW_REQUEST = "users/FOLLOW_REQUEST";
export const FOLLOW_SUCCESS = "users/FOLLOW_SUCCESS";
export const FOLLOW_FAILURE = "users/FOLLOW_FAILURE";

export const UNFOLLOW_REQUEST = "users/UNFOLLOW_REQUEST";
export const UNFOLLOW_SUCCESS = "users/UNFOLLOW_SUCCESS";
export const UNFOLLOW_FAILURE = "users/UNFOLLOW_FAILURE";

export const CHANGE_NICKNAME_REQUEST = "users/CHANGE_NICKNAME_REQUEST";
export const CHANGE_NICKNAME_SUCCESS = "users/CHANGE_NICKNAME_SUCCESS";
export const CHANGE_NICKNAME_FAILURE = "users/CHANGE_NICKNAME_FAILURE";

export const ADD_POST_TO_ME = "ADD_POST_TO_ME";
export const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

const dummyUser = (data) => ({
  ...data,
  nickname: "원근",
  id: 1,
  Posts: [{ id: 1 }],
  Followings: [
    { nickname: "conrad" },
    { nickname: "conrad2" },
    { nickname: "conrad3" },
  ],
  Followers: [
    { nickname: "conrad" },
    { nickname: "conrad2" },
    { nickname: "conrad3" },
  ],
});

export const logInRequestAction = (data) => ({ type: LOG_IN_REQUEST, data });
export const logOutRequestAction = () => ({ type: LOG_OUT_REQUEST });

export const initialState = {
  logInDone: false,
  logInError: null,
  logInLoading: false,

  logOutDone: false,
  logOutError: null,
  logOutLoading: false,

  signUpDone: false,
  signUpError: null,
  signUpLoading: false,

  changeNickNameDone: false,
  changeNickNameError: null,
  changeNickNameLoading: false,

  me: null,
  signUpData: {},
  loginData: {},
};

export default function reducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.logInError = null;
        draft.me = dummyUser(action.data);
        break;
      case LOG_IN_FAILURE:
        draft.logInError = action.error;
        draft.logInLoading + false;
        draft.logInDone = false;
        break;
      case LOG_OUT_REQUEST:
      case LOG_IN_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutDone = true;
        draft.logOutLoading = false;
        draft.logOutError = null;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutError = action.error;
        draft.logOutLoading = false;
        draft.logOutDone = false;
        break;
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpDone = true;
        draft.signUpLoading = false;
        draft.signUpError = null;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpDone = false;
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      case CHANGE_NICKNAME_REQUEST:
        draft.changeNickNameLoading = true;
        draft.changeNickNameDone = false;
        draft.changeNickNameError = null;
        break;
      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNickNameDone = true;
        draft.changeNickNameLoading = false;
        draft.changeNickNameError = null;
        break;
      case CHANGE_NICKNAME_FAILURE:
        draft.changeNickNameDone = false;
        draft.changeNickNameLoading = false;
        draft.changeNickNameError = action.error;
        break;
      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({ id: action.data });
        break;
      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter((y) => y.id !== action.data);
        break;
      // return {
      //   ...state,
      //   me: {
      //     ...state.me,
      //     Posts: state.me.Posts.filter((y) => y.id !== action.data),
      //   },
      // };
      default:
        break;
    }
  });
}
