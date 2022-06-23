const defaultState = {
    users:[],
}

const LOAD_USERS = "LOAD_USERS";
const ADD_USER ="ADD_USER";
const UPDATE_USER = "UPDATE_USER";
const REMOVE_USER = "REMOVE_USER";



export const usersReducer = (state = defaultState, action) =>{
    switch(action.type){
        case LOAD_USERS:
            return{...state, users: [...action.payload]} 
        case ADD_USER:
            return{...state, users: [action.payload, ...state.users]}
        case UPDATE_USER:
            return {...state, users: [...action.payload]}
        case REMOVE_USER:
            return {...state, users: state.users.filter(user=>user.id !== action.payload)}
        default:
            return state;
    }
}

export const loadUsersAction = (payload) =>({type: LOAD_USERS, payload})
export const addUserAction = (payload) => ({type: ADD_USER, payload})
export const updateUserAction = (payload) => ({type: UPDATE_USER, payload})
export const removeUserAction = (payload) =>({type: REMOVE_USER, payload})