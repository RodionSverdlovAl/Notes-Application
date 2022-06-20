import {NavLink, Outlet} from 'react-router-dom'
const Layout = () =>{
    return(
        <div>
            <header>
                <nav>
                    <NavLink to='/'>HOME</NavLink>
                    <NavLink to ='/posts'>POST</NavLink>
                    <NavLink to ='/users'>USERS</NavLink>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export {Layout}