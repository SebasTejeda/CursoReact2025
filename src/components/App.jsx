import { Navigate, Outlet } from "react-router-dom"
import Menu from "./menu/Menu"

const App = () => {

    if(!localStorage.getItem('tokenEDmarket')) return <Navigate to='/login'></Navigate>

    return (
        <>
            <Menu></Menu>
            <Outlet></Outlet>
        </>
    )
}

export default App
