import { useRef, useEffect } from 'react'
import './Crypto.css'
import { Link } from 'react-router-dom'
const Crypto = ({id, name, priceUsd, symbol, changePercent24Hr}) => {

    let percent = parseFloat(changePercent24Hr).toFixed(3)


    return (
        <div className='cripto'>
            <h2>{name}</h2>
            <div className="info">
                <p><span className='label'>Precio: </span> $ {parseFloat(priceUsd).toFixed(4)} USD</p>
                <p><span className='label'>Código: </span>{symbol}</p>
                <p>
                    <span className='label'>Variación 24hrs: </span>
                    <span className={ percent > 0? "positivo" : "negativo"}>{percent}%</span>
                </p>
                <Link to={`/criptomonedas/${id}`}>Ver detalles</Link>
            </div>
        </div>
    )
}

export default Crypto
