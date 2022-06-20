import { createStore } from "redux";
import {combineReducers} from 'redux'

import { applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { postReducer } from "./reducers/postReducer";

const rootReducer = combineReducers({
    posts: postReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

