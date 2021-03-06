import axios from 'axios'
import { loadPostAction } from '../reducers/postReducer';

export const fetchPosts = () =>{
    return async function(dispatch){
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
            dispatch(loadPostAction(response.data))
        }catch(e){
            alert(e);
        }
    }
}