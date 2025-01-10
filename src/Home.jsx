import { Link } from "react-router-dom"
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <h1 className="welcome">Hola, bienvenido a EDmarket </h1>
            <p className="welcome_info">Conoce las 100 criptos más usadas</p>
            <Link to='/criptomonedas' className="link_cripto">Ver Criptomonedas</Link>
        </div>
    )
}

export default Home
