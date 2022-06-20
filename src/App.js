import '../src/App.scss'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPosts } from './store/asyncActions/posts'
import {Routes, Route} from 'react-router-dom'
import { Layout } from './components/Layout'

const App = () =>{

    // const posts = useSelector(state => state.posts.posts);
    // const dispatch = useDispatch();
    // useEffect(()=>{
    //     dispatch(fetchPosts())
    // },[])

    return(
        <div>
           <Routes>
             <Route path='/' element ={<Layout/>}>

             </Route>
           </Routes>
        </div>
    )
}

export default App