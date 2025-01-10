import {formatFloat} from '../../../helpers/FunctionInfo'

const CriptoInfo = ({cripto}) => {
    return(
        <div className="all_info">
            <div className="info">
                <p className="ranking">Ranking: {cripto.rank}</p>
                <h1 className="cripto_name">{cripto.id}</h1>
                <p className="symbol">{cripto.symbol}</p>
            </div>
            <div className="info_important">
                <ul>
                    <li>
                        <p>Precio: <span>{formatFloat(cripto.priceUsd)}</span></p>
                    </li>
                    <li>
                        <p>MaxSupply: <span>{formatFloat(cripto.maxSupply)}</span></p>
                    </li>
                    <li>
                        <p>Market Cap (USD): <span>{formatFloat(cripto.marketCapUsd)}</span></p>
                    </li>
                    <li>
                        <p>Volumen (USD - 24 Hrs.): <span>{formatFloat(cripto.volumeUsd24Hr)}</span></p>
                    </li>
                    <li>
                        <p>Variación (24 Hrs.): <span>{formatFloat(cripto.changePercent24Hr)}</span></p>
                    </li>
                    <li>
                        <p>Vwap 24Hrs. : <span>{formatFloat(cripto.vwap24Hr)}</span></p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CriptoInfo
