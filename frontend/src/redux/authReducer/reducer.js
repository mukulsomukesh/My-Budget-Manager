import * as types from "./actionTypes";

const initialState = {

  isSignupProcess: false,
  isSignupSuccess: false,
  isSignupFail: false,
  signupMessage: "",

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

    default:
      return state;
  }
};
