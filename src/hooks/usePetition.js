import axios from "axios"
import { useEffect, useState } from "react"

const usePetition = (endpoint, rep=[]) => {

    const ONCE_CRIPTO = import.meta.env.VITE_API_URL
    const [data, setData] = useState()
    const [cargando, setCargando] = useState(false)
    useEffect(() => {
        setCargando(true)

        axios.get(`${ONCE_CRIPTO}${endpoint}`)
        .then(data => {
            setData(data.data.data)
        })
        .catch(() => {
            console.error('La petición falló')
        })
        .finally(()=>setCargando(false))
    }, rep)
    return [data, cargando]
}

export default usePetition
