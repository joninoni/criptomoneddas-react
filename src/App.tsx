import { useEffect, useMemo } from "react"
import CryptoSearchForm from "./components/CryptoSearchForm"
import { criptoStore } from "./store/store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"
import Spinner from "./components/Spinner"

function App() {

	const {result,loading,fetchCrypto} = criptoStore()

	const hasResult = useMemo( ()=>!Object.values(result).includes("") ,[result])

	useEffect( () => {
		fetchCrypto()
	},[fetchCrypto])

	return (
		<>
			<div className="container">
				<h1 className="app-title">
					Cotizador de 
					<span>Criptomonedas</span>				
				</h1>

				<div className="content">
					<CryptoSearchForm/>
					{loading? <Spinner/> : hasResult &&  <CryptoPriceDisplay/>}
				</div>
			</div>
		</>
	)
}

export default App
