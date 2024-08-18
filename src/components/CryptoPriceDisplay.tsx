import { criptoStore } from "../store/store"

const CryptoPriceDisplay = () => {

    const {result} = criptoStore()

    return (
        <div className="result-wrap">

            <h2>Cotizador</h2>

            <div className="result">
                <img src={`https:cryptocompare.com${result.IMAGEURL}`} alt="imagen de criptomoneda" />
                <div>
                    <p>El precio es de :<span>{result.PRICE}</span></p>
                    <p>El precio mas alto del día :<span>{result.HIGHDAY}</span></p>
                    <p>El precio mas bajo del día:<span>{result.LOWDAY}</span></p>
                    <p>Variación ultimas 24 horas :<span>{result.CHANGEPCT24HOUR}</span></p>
                    <p>Última actualización:<span>{result.LASTUPDATE}</span></p>
                </div>
            </div>

        </div>
    )
}

export default CryptoPriceDisplay