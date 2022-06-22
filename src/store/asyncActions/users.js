import axios from "axios"
import { loadUsersAction } from "../reducers/usersReducer"

export const fetchUsers = () =>{
    return async function(dispatch){
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch(loadUsersAction(response.data))
        }catch(e){
            alert(e)
        }
    }
}