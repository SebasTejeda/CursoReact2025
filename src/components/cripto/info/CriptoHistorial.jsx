import { useState } from "react"
import usePetition from "../../../hooks/usePetition"
import {formattedDate} from '../../../helpers/FunctionInfo'

const CriptoHistorial = ({params}) => {
    const [interval, setInterval] = useState('m1')
    const [history, historyCargando] = usePetition(`assets/${params.id}/history?interval=${interval}`, [interval])

    if(historyCargando) return <span>Cargando...</span>
    
    if(!history) return <span>Cargando historial</span>


    return (
            <div className="history">
                <div className="interval">
                    <h3>Tipo de Intervalo: </h3>
                    <select value={interval} onChange={(e) => setInterval(e.target.value)}>
                        <option value="m1">último minuto</option>
                        <option value="m5">últimos 5 minutos</option>
                        <option value="m15">últimos 15 minutos</option>
                        <option value='m30'>últimos 30 minutos</option>
                        <option value="h1">última hora</option>
                        <option value="h2">últimas dos horas</option>
                        <option value="h6">últimas seis horas</option>
                        <option value="h12">últimas doce horas</option>
                        <option value="d1">último día</option>
                    </select>
                </div>
                <table className="table">
                    <thead>
                        <tr className="header_table">
                            <th>Fecha</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            history.map(({priceUsd, date, time})=>(
                                <tr className="cripto_table" key={time}>
                                    <td className="date">{formattedDate(date)}</td>
                                    <td className="price">{parseFloat(priceUsd).toFixed(3)} </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
    )
}

export default CriptoHistorial
