import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { editPostAction, removePostAction } from "../store/reducers/postReducer";

const PostItem = ({post}) =>{
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    const [id, setId] = useState(post.id);
    const [edit, setEdit] = useState(false);

    const dispatch = useDispatch();
    const posts = useSelector(state=>state.posts.posts);


    const removePost =(post) =>{
        console.log(post.id)
        dispatch(removePostAction(post.id))
    }
    const editPost = () =>{
        setEdit(true);
    }


    const updatePost = () =>{
        setEdit(false);
        for(let i=0; i<posts.length; i++){
            if(posts[i].id === id){
                posts[i].title = title;
                posts[i].body = body;
            }
        }
        dispatch(editPostAction(posts))
    }

    return(
        <div className="item">
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={()=>removePost(post)}>Delete</button>
            {edit 
            ?<div>
                <h3>Title</h3>
                <input type="text" value={title} onChange = {e=> setTitle(e.target.value)} /><br/>
                <h3>Body</h3>
                <input type="text" value = {body} onChange = {e=> setBody(e.target.value)} /><br/>
                <button  onClick={()=>updatePost()}>edit</button>
            </div>
            :<button onClick={()=>editPost()}>Edit</button>}
        </div>
    )
}

export default PostItem