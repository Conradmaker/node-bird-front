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

const dummyUser = (data) => ({
  ...data,
  nickname: "원근",
  id: 1,
  Posts: [],
  Followings: [],
  Followers: [],
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
  me: null,
  signUpData: {},
  loginData: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        logInLoading: true,
        logInDone: false,
        logInError: null,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logInDone: true,
        logInLoading: false,
        logInError: null,
        me: dummyUser(action.data),
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        logInDone: false,
        logInLoading: false,
        logInError: action.error,
        me: null,
      };
    case LOG_OUT_REQUEST:
      return {
        ...state,
        logOutLoading: true,
        logOutDone: false,
        logOutError: null,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        logOutDone: true,
        logOutLoading: false,
        logOutError: null,
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        signUpDone: false,
        signUpLoading: false,
        signUpError: action.error,
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        signUpLoading: true,
        signUpDone: false,
        signUpError: null,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpDone: true,
        signUpLoading: false,
        signUpError: null,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signUpDone: false,
        signUpLoading: false,
        signUpError: action.error,
      };
    default:
      return state;
  }
}
