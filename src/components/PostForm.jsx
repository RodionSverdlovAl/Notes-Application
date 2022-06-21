import { useState } from "react";
import { addPostAction, sortPostsAction } from "../store/reducers/postReducer";
import { useDispatch } from "react-redux";

const PostForm = () =>{

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    const sortPosts = () =>{
        dispatch(sortPostsAction())
    }

    const addPost = (e) =>{
        e.preventDefault();
        if(title.length > 0 && body.length >0){
            const post ={
                title: title,
                body: body,
                id: Date.now()
            }
            dispatch(addPostAction(post))
            setTitle('');
            setBody('');
        }else{
            alert("Enter post title and post body");
        }
    }

    return(
        <div>
            <input value={title} onChange = {e=>setTitle(e.target.value)} type="text" placeholder="Enter post title" /><br />
            <input value={body} onChange ={e=>setBody(e.target.value)} type="text" placeholder="Enter post body"/><br />
            <button onClick= {addPost}>Add post</button>
            <button onClick={sortPosts}>Sort posts</button>
        </div>
    )
}
export default PostForm