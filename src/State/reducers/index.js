import { combineReducers } from "redux";
import blogReducer from "./blogReducer";


const reducers = combineReducers({
    blog: blogReducer
})

export default reducers