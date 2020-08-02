const LOG_IN = "users/LOG_IN";
const LOG_OUT = "users/LOG_OUT";

export const logIn = (data) => ({ type: LOG_IN, data });
export const logOut = () => ({ type: LOG_OUT });

export const initialState = {
  isloggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isloggedIn: true, me: action.data };
    case LOG_OUT:
      return { ...state, isloggedIn: false, me: null };
    default:
      return state;
  }
}
