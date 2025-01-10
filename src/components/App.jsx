import { Outlet } from "react-router-dom"
import Menu from "./menu/Menu"

const App = () => {
    return (
        <>
            <Menu></Menu>
            <Outlet></Outlet>
        </>
    )
}

export default App
