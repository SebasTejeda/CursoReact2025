import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import axios from 'axios'

function App() {

  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState()

  useEffect(() => {
    axios.get(`${API_URL}assets`)
    .then(data => {setCriptos(data.data.data);
    })
    .catch(() =>{console.error('La petición falló')})
  }, [])

  if(!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <ul>
        {criptos.map(({id, name, priceUsd}) => (
          <li key={id}>Nombre: {name} Precio: {priceUsd}</li>))
        }
      </ul>
    </>
    
  )
}

export default App
