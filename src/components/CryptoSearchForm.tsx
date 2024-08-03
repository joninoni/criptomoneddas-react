import { currencies } from "../data"
import { criptoStore } from "../store/store"

const CriptoSearchForm = () => {

    const {cryptoCurrencies} = criptoStore()

    return (
        <div>
            <form className="form">

                <div className="field">
                    <label className="currency" htmlFor="currency">Moneda</label>
                    <select className="select" name="currency" id="currency">
                        <option>--Seleccione</option>
                        {currencies.map( currency =>(
                            <option key={currency.code} value={currency.code}>{currency.name}</option>
                        ))}							
                    </select>								
                </div>

                <div className="field">
                    <label className="criptocurrency" htmlFor="criptocurrency">Criptmoneda</label>
                    <select className="select" name="criptocurrency" id="criptocurrency">
                        <option disabled>--Seleccione</option>
                        {cryptoCurrencies.map( crypto =>(
                            <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
                        ))}
                    </select>
                </div>

                <input
                    className="submit"
                    type="submit"
                    value="Cotizar"
                />
            </form>
        </div>
    )
}

export default CriptoSearchForm