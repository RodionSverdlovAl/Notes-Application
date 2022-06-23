import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUserAction, updateUserAction } from "../store/reducers/usersReducer";
const UserItem = ({user}) =>{

    const [id, setId] = useState(user.id)
    const [name, setName] = useState(user.name);
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [city, setCity] = useState(user.address.city);
    const [street, setStreet] = useState(user.address.street);

    const [edit, setEdit] = useState(false);

    const dispatch = useDispatch();

    const users = useSelector(state=> state.users.users)

    const removeUser = (user) =>{
        dispatch(removeUserAction(user.id))
    }

    const updateUser = () =>{
        let nameValid = false;
        let usernameValid = false;
        let emailValid = false;
        let phoneValid = false;
        let cityValid = false;
        let streetValid = false;


        const reEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,6}$/i;
        const rePhone = /^[\d\+][\d\(\)\ -]{4,14}\d$/;

        if(name.length >0){
            nameValid = true
        }else{
            alert('You dont enter name of user')
        }
        
        if(username.length > 2 && username.length <20){
            usernameValid = true
        }else{
            alert('Enter username (length 2-20 simbols)')
        }

        if(reEmail.test(email) && email.length> 3){
            emailValid=true;
        }else{
            alert('Enter correct email (include @, . )')
        }

        if(rePhone.test(phone)){
            phoneValid = true
        }else{
            alert('Enter correct phone number')
        }

        if(city.length > 2){
            cityValid =true
        }else{
            alert('Enter city')
        }

        if(street.length >2){
            streetValid =true;
        }else{
            alert('Enter street')
        }

        if(nameValid && usernameValid && emailValid && phoneValid && cityValid && streetValid){
            const UpdateUser = {
                id: id,
                name: name,
                username: username,
                email: email,
                phone: phone,
                address: {
                    city: city,
                    street: street,
                }
            }

            for(let i=0; i<users.length; i++){
                if(users[i].id == UpdateUser.id){
                    users[i].name = UpdateUser.name;
                    users[i].username = UpdateUser.username;
                    users[i].email = UpdateUser.email;
                    users[i].phone = UpdateUser.phone;
                    users[i].address.city = UpdateUser.address.city;
                    users[i].address.street = UpdateUser.address.street;
                }
            }
            dispatch(updateUserAction(users))
            setEdit(false);


            console.log(user)
        }else{
            alert('form dont correct')
        }        
    }

    return(
        <div className="item">
            <h3>{name}</h3>
            <p>username: {username}</p>
            <p>email: {email}</p>
            <p>phone number: {phone}</p>
            <p>city: {city}, street: {street}</p>
            <button onClick = {()=>removeUser(user)}>delete</button>
            {
                edit ? <div>
                            <p>name:</p>
                            <input value={name} onChange = {e=>setName(e.target.value)} type="text" />
                            <p>username:</p>
                            <input value={username} onChange={e=>setUsername(e.target.value)} type="text" />
                            <p>email:</p>
                            <input value={email} onChange={e=>setEmail(e.target.value)} type="text" />
                            <p>phone:</p>
                            <input value={phone} onChange={e=>setPhone(e.target.value)} type="text" />
                            <p>city:</p>
                            <input value={city} onChange={e=>setCity(e.target.value)} type="text" />
                            <p>street:</p>
                            <input value={street} onChange={e=>setStreet(e.target.value)} type="text" />
                            <button onClick={()=>updateUser()}>edit</button>
                       </div>
                     :
                       <button onClick = {()=>setEdit(true)}>edit</button>
            }
            
        </div>
    )
}

export default UserItem