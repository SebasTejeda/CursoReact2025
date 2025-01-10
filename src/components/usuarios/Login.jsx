import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import '../usuarios/Login.css'

const Login = () => {

    const navigation = useNavigate()

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState()

    const submit = (e) => {
        e.preventDefault()
        setCargando(true)
        setError(null)

        axios.post(`https://reqres.in/api/login`, user)
        .then(data => {
            setCargando(false)
            localStorage.setItem('tokenEDmarket', data.data.token)
            navigation('/')
        })
        .catch(e => {
            setCargando(false)
            console.error(e) 
            setError(e.response.data.error)
        })
        
    }

    if(localStorage.getItem('tokenEDmarket')) return <Navigate to='/'></Navigate>

    return (
        <div className="login-container">
            <h1>Iniciar Sesión</h1>
            <form action="" onSubmit={submit}>

                <div className="field">
                    <label>
                        Correo Electrónico
                        <input required onChange={(e) => {
                            setUser({...user, email: e.target.value})
                        }} type="email"/>
                        </label>
                </div>

                <div className="field">
                    <label>
                        Contraseña
                        <input required onChange={(e) => {
                            setUser({...user, password: e.target.value})
                        }} type="password"/>
                        </label>
                </div>

                <div className="submit">
                    <input type="submit" value={cargando? 'Cargando...': 'Ingresar'} />
                </div>
            </form>
            {
                error && 
                <span className="error" 
                    style={{background: 'tomato', lineHeight: 5}}>
                    Error: {error === 'user not found'? 'Usuario y/o contraseñas incorrectas': 'Error extraño'}
                </span>
            }
        </div>
    )
}

export default Login
