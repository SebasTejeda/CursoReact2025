import { NavLink, useNavigate } from 'react-router-dom'
import './Menu.css'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
const Menu = () => {

    const usuario = useContext(UserContext)
    const navigation = useNavigate()

    return (
        <>
            <nav className="main-menu">
                <ul>
                    <li><NavLink to='/'>Inicio</NavLink></li>
                    <li><NavLink to="/criptomonedas">Lista de Criptos</NavLink></li>
                    <li><NavLink to='/perfil'>Perfil de {usuario.name}</NavLink></li>
                    <li><a onClick={() => {
                        localStorage.removeItem('tokenEDmarket')
                        navigation('/login')
                    }}>Cerrar Sesión</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Menu
