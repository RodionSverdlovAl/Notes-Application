const CreateUserForm = ({setAdd}) =>{

    const createUser = () =>{
        setAdd(false)
    }

    return(
        <div className="UserForm">
            <div className="user-form-container">
                <input type="text" placeholder="Enter user name and surname "/><br/>
                <input type="text" placeholder="Enter username"/><br/>
                <input type="email" placeholder="Enter user email"/><br/>
                <button onClick={createUser}>Create</button>
            </div>
           
        </div>
    )
}

export default CreateUserForm