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
            return {...state, posts: [...action.payload]};
        case ADD_POST:
            return {...state, posts:[action.payload, ...state.posts]};
        case REMOVE_POST:
            return {...state, posts:state.posts.filter(post=>post.id !== action.payload)}
        case UPDATE_POST:
            return state;
        default:
            return state;
    }
}

export const loadPostAction = (payload) =>({type: LOAD_POSTS, payload})
export const addPostAction = (payload) =>({type:ADD_POST, payload})
export const removePostAction = (payload) =>({type: REMOVE_POST, payload})
