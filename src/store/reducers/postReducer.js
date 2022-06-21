const defaultState = {
    posts:[],
}

const LOAD_POSTS = "LOAD_POSTS";
const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";
const UPDATE_POST = "UPDATE_POST";
const SORT_POSTS = "SORT_POSTS";

export const postReducer = (state = defaultState, action) =>{
    switch(action.type){
        case LOAD_POSTS:
            return {...state, posts: [...action.payload]};
        case ADD_POST:
            return {...state, posts:[action.payload, ...state.posts]};
        case REMOVE_POST:
            return {...state, posts:state.posts.filter(post=>post.id !== action.payload)}
        case UPDATE_POST:
            return {...state, posts:[...action.payload]};
        case SORT_POSTS:
            return {...state, posts: [...state.posts].sort((a, b) => a.title.localeCompare(b.title))}
        default:
            return state;
    }
}

export const loadPostAction = (payload) =>({type: LOAD_POSTS, payload})
export const addPostAction = (payload) =>({type:ADD_POST, payload})
export const removePostAction = (payload) =>({type: REMOVE_POST, payload})
export const editPostAction = (payload) =>({type: UPDATE_POST, payload})
export const sortPostsAction = () =>({type: SORT_POSTS})
