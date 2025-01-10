import { useParams } from "react-router-dom"
import '../cripto/CriptoPage.css'
import usePetition from "../../hooks/usePetition"
import CriptoInfo from "./info/CriptoInfo"
import CriptoHistorial from "./info/CriptoHistorial"

const CriptoPage = () => {

    const params = useParams()
    const [cripto, criptoCargando] = usePetition(`assets/${params.id}`)

    if(criptoCargando) return <span>Cargando...</span>
    
    return (
        <div className="cripto_info">
            {cripto && <CriptoInfo cripto={cripto}></CriptoInfo>}
            <CriptoHistorial params={params}></CriptoHistorial>
        </div>
    )
}

export default CriptoPage
