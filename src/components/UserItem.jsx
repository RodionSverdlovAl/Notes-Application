const UserItem = ({user}) =>{


    

    return(
        <div className="user_item">
            <h3>{user.name}</h3>
            <p>username: {user.username}</p>
            <p>email: {user.email}</p>
            <p>phone number: {user.phone}</p>
            <p>city: {user.address.city}, street: {user.address.street}</p>
            <button>delete</button>
            <button>edit</button>
        </div>
    )
}

export default UserItem