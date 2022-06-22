import { createStore } from "redux";
import {combineReducers} from 'redux'

import { applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { postReducer } from "./reducers/postReducer";
import { usersReducer } from "./reducers/usersReducer";

const rootReducer = combineReducers({
    posts: postReducer,
    users: usersReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

