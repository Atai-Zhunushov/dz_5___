import { combineReducers } from "redux"
import preloaderReducer from "./preloaderReducer"
import usersReducer from "./getusers";

export const rootReducer = combineReducers({
    preloaderReducer,
    usersReducer
})