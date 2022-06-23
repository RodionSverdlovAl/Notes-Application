import { useState } from "react"
import CreateUserForm from "../components/CreateUserForm";
import UsersList from "../components/UsersList"

const Userpage = () =>{

    const [add, setAdd] = useState(false);
    
    return(
        <div>
            <UsersList/>
            {add 
            ? <div>
                <CreateUserForm setAdd = {setAdd}/>
              </div>
            :
             <button className="create-user-button" onClick={()=>setAdd(true)}>CREATE USER</button>
             }
        </div>
    )
}

export {Userpage}