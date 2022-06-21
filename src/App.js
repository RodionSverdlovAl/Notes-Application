import '../src/App.scss'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPosts } from './store/asyncActions/posts'
import {Routes, Route} from 'react-router-dom'
import { Layout } from './components/Layout'
import { Homepage } from './pages/Homepage'
import { Postpage } from './pages/Postspage'
import { Userpage } from './pages/Userspage'

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
                <Route index element = {<Homepage/>}/>
                <Route path = 'posts' element={<Postpage/>}/>
                <Route path = 'users' element = {<Userpage/>}/>
             </Route>
           </Routes>
        </div>
    )
}

export default App