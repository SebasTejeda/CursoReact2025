import { useEffect, useState } from 'react'
import axios from 'axios'
import Crypto from './cripto/Crypto.jsx'
import './Cuadricula.css'

function Cuadricula() {

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
    <div className='app-container'>
      <h1>Lista de criptomonedas</h1>
      <div className='grill'>
        {criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
            <Crypto key={id} id={id} name={name} priceUsd={priceUsd} symbol={symbol} changePercent24Hr={changePercent24Hr} className='crypto'></Crypto>))
        }
      </div>
      
    </div>
    
  )
}

export default Cuadricula
