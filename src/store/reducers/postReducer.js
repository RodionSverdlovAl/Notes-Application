const defaultState = {
    posts:[],
}

const LOAD_POSTS = "LOAD_POSTS";
const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";
const UPDATE_POST = "UPDATE_POST";

export const postReducer = (state = defaultState, action) =>{
    switch(action.type){
        case LOAD_POSTS:
            return state;
        case ADD_POST:
            return state;
        case REMOVE_POST:
            return state;
        case UPDATE_POST:
            return state;
        default:
            return state;
    }
}

export const loadPostAction = (payload) =>({type: LOAD_POSTS, payload})
