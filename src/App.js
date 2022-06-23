import '../src/App.scss'
import {Routes, Route} from 'react-router-dom'
import { Layout } from './components/Layout'
import { Homepage } from './pages/Homepage'
import { Postpage } from './pages/Postspage'
import { Userpage } from './pages/Userspage'

const App = () =>{
    
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