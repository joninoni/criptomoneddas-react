import { useEffect } from "react"
import CryptoSearchForm from "./components/CryptoSearchForm"
import { criptoStore } from "./store/store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"

function App() {

	const {result,fetchCrypto} = criptoStore()

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
					{!Object.values(result).includes("") && <CryptoPriceDisplay/>}
				</div>
			</div>
		</>
	)
}

export default App
