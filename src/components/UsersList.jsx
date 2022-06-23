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
            {users.map(user =><UserItem key={user.id} user={user}/>)}
        </div>
    )
}
export default UsersList