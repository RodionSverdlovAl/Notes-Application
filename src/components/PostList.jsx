import PostItem from "./PostItem";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPosts } from '../store/asyncActions/posts'

const PostList = () =>{

    const posts = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchPosts())
    },[])

    return(
        <div className="post_list">
            <h3>Post count: {posts.length}</h3>
            {posts.length>0 ?posts.map(post=><PostItem key = {post.id} post ={post}/>) : <h2>Post list is empty!</h2>}
        </div>
    )
}
export default PostList