import { useState, ChangeEvent, FormEvent } from "react"
import { currencies } from "../data"
import { criptoStore } from "../store/store"
import { Pair } from "../types/index"
import ErrorMessage from "./ErrorMessage"

const CriptoSearchForm = () => {

    const {cryptoCurrencies,fetchData} = criptoStore()

    const [pair,setPair] = useState<Pair>({
        currency : "",
        criptocurrency : "",
    })

    const [error,setError] = useState("")

    const handleChange = (e : ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit =(e :  FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        //validando que el formulario este completo es necesario solo si no se llegan a cargar los datos de la api
        if(Object.values(pair).includes("")){
            setError("Todos los campos son obligatorios")
            return
        }
        //paso la validacion
        setError("")
        fetchData(pair)
    }

    return (
        <div>
            <form 
                className="form"
                onSubmit={handleSubmit}
            >
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <div className="field">
                    <label className="currency" htmlFor="currency">Moneda</label>
                    <select
                        className="select"
                        name="currency"
                        id="currency"
                        value={pair.currency}
                        onChange={handleChange}
                    >   
                        <option value="">--Seleccione</option>                  
                        {currencies.map( currency =>(
                            <option key={currency.code} value={currency.code}>{currency.name}</option>
                        ))}							
                    </select>								
                </div>

                <div className="field">
                    <label className="criptocurrency" htmlFor="criptocurrency">Criptmoneda</label>
                    <select
                    className="select"
                    name="criptocurrency"
                    id="criptocurrency"
                    value={pair.criptocurrency}
                    onChange={handleChange}
                    >
                        <option value="">--Seleccione</option>          
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