import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUserAction } from "../store/reducers/usersReducer";
const CreateUserForm = ({setAdd}) =>{

   const [name, setName] = useState('');
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [city, setCity] = useState('');
   const [street, setStreet] = useState('');

   const dispatch = useDispatch();


   // 1. make validation

    const createUser = (e) =>{
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
            const user = {
                id: Date.now(),
                name: name,
                username: username,
                email: email,
                phone: phone,
                address: {
                    city: city,
                    street: street,
                }
            }
            console.log(user)
            dispatch(addUserAction(user))
            setAdd(false)
        }else{
            alert('form dont correct')
        }        
    }

    const close = () =>{
        setAdd(false)
    }

    return(
        <div className="UserForm">
            <div className="user-form-container">
                <button className="close" onClick={close}>X</button>
                <form>
                    <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter user name and surname "/><br/>
                    <input type="text" value={username} onChange = {e=>setUsername(e.target.value)}  placeholder="Enter username"/><br/>
                    <input type="email" value={email} onChange = {e=>setEmail(e.target.value)} placeholder="Enter user email"/><br/>
                    <input type="text" value = {phone} onChange = {e=>setPhone(e.target.value)} placeholder="Enter phone number"/><br/>
                    <input type="text" value = {city} onChange = {e=>setCity(e.target.value)} placeholder="Enter city"/><br/>
                    <input type="text" value={street} onChange = {e=>setStreet(e.target.value)} placeholder="Enter street"/><br/>
                </form>
                <button className="create-btn" onClick={createUser}>Create</button>
            </div>
           
        </div>
    )
}

export default CreateUserForm