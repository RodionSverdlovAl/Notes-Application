import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../store/asyncActions/users";
import UserItem from "./UserItem";

const UsersList =() =>{

    const dispatch = useDispatch();
    const users = useSelector(state=>state.users.users)


     useEffect(()=>{
        dispatch(fetchUsers())
     },[])

    return(
        <div className="list">
            <h3>Users count: {users.length}</h3>
            {users.length > 0 ? users.map(user =><UserItem key={user.id} user={user}/>)
            : <h3>Users List in empty</h3>
            }
            
        </div>
    )
}
export default UsersList