import { legacy_createStore , combineReducers , applyMiddleware } from "redux";
import {reducer as AuthReducer} from "./authReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({AuthReducer})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));