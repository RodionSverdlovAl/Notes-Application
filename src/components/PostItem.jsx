import { useDispatch } from "react-redux"
import { removePostAction } from "../store/reducers/postReducer";

const PostItem = ({post}) =>{

    const dispatch = useDispatch();

    const removePost =(post) =>{
        console.log(post.id)
        dispatch(removePostAction(post.id))
    }
    return(
        <div className="post_item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={()=>removePost(post)}>Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default PostItem