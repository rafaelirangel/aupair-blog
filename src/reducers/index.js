
import { combineReducers } from "redux";
import postsReducer from './posts';
import { loginReducer } from "./authReducer";

//  that specify how the state is changed in response to actions

export default combineReducers({
    postsReducer,
    auth: loginReducer
})
