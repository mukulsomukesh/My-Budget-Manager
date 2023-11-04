import * as types from "./actionTypes";

const initialState = {

  isSignupProcess: false,
  isSignupSuccess: false,
  isSignupFail: false,
  signupMessage: "",

  isLoginProcess: false,
  isLoginSuccess: false,
  isLoginFail: false,
  loginMessage: "",

};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    case types.USER_SIGNUP_PROCESSING:
      return {
        ...state,
        isSignupSuccess: false,
        isSignupProcess: true,
        isSignupFail: false,
        signupMessage: "",
      };
    case types.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        isSignupSuccess: true,
        isSignupProcess: false,
        isSignupFail: false,
        signupMessage: payload.data.message,
      };
    case types.USER_SIGNUP_FAIL:
      return {
        ...state,
        isSignupSuccess: false,
        isSignupProcess: false,
        isSignupFail: true,
        signupMessage: payload,
      };

      case types.USER_LOGIN_PROCESSING:
        return {
          ...state,
          isLoginSuccess: false,
          isLoginProcess: true,
          isLoginFail: false,
          loginMessage: "",
        };
      case types.USER_LOGIN_SUCCESS:
        return {
          ...state,
          isLoginSuccess: true,
          isLoginProcess: false,
          isLoginFail: false,
          loginMessage: payload.data.message,
        };
      case types.USER_LOGIN_FAIL:
        return {
          ...state,
          isLoginSuccess: false,
          isLoginProcess: false,
          isLoginFail: true,
          loginMessage: payload,
        };
  
    default:
      return state;
  }
};
