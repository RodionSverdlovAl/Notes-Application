const defaultState = {
    users:[],
}

const LOAD_USERS = "LOAD_USERS";
const ADD_USER ="ADD_USER";



export const usersReducer = (state = defaultState, action) =>{
    switch(action.type){
        case LOAD_USERS:
            return{...state, users: [...action.payload]} 
        case ADD_USER:
            return{...state, users: [action.payload, ...state.users]}
        default:
            return state;
    }
}

export const loadUsersAction = (payload) =>({type: LOAD_USERS, payload})
export const addUserAction = (payload) => ({type: ADD_USER, payload})