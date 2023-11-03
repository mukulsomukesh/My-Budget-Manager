import axios from "axios"
import * as types from "./actionTypes";

const END_POINT = "https://authentication-q13p.onrender.com"

// signup function
const signupFunction = (userData) = async (dispatch) => {

    // signup processing
    dispatch({ type: types.USER_SIGNUP_PROCESSING });

    try {

        // axios post request
        const result = await axios.post(`${END_POINT}`, userData);

        // dispatch signup success 
        // dispatch({ type: types.USER_SIGNUP_SUCCESS, payload: res.data })
        console.log(res)

    } catch (error) {

        // dispatch signup fail 
        console.log(error)
        // dispatch({ type: types.USER_SIGNUP_FAIL, payload: error })

    }
}


export { signupFunction };

