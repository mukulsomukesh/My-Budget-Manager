import axios from "axios"
import * as types from "./actionTypes";

const END_POINT = "https://budget-manager-lww5.onrender.com"

// signup function
const signupFunction = (formData) => async (dispatch) => {

    // signup processing
    dispatch({ type: types.USER_SIGNUP_PROCESSING });

    try {

        // axios post request
        const result = await axios.post(`${END_POINT}/api/auth/signup`, formData);

        // dispatch signup success 
        dispatch({ type: types.USER_SIGNUP_SUCCESS, payload: result })
    } catch (error) {

        // dispatch signup fail 
        dispatch({ type: types.USER_SIGNUP_FAIL, payload: error.response.data.error || "Signup Fail Please Try Again!" })
    }
}


// login function
const loginFunction = (formData) => async (dispatch) => {

    // login processing
    dispatch({ type: types.USER_LOGIN_PROCESSING });

    try {

        // axios post request
        const result = await axios.post(`${END_POINT}/api/auth/login`, formData);

        // dispatch login success 
        dispatch({ type: types.USER_LOGIN_SUCCESS, payload: result })
    } catch (error) {

        // dispatch signup fail 
        dispatch({ type: types.USER_LOGIN_FAIL, payload: error.response.data.error || "Login Fail Please Try Again!" })
    }
}

export { signupFunction, loginFunction };

