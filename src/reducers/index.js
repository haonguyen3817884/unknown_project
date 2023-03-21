import { combineReducers } from "redux";
import authReducer from "./authReducer";
import blogReducer from "./blogReducer";

export default combineReducers({
    authReducer,
    blogReducer
});