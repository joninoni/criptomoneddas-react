import { useEffect } from "react"
import CryptoSearchForm from "./components/CryptoSearchForm"
import { criptoStore } from "./store/store"

function App() {

	const {fetchCrypto} = criptoStore()

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
				</div>
			</div>
		</>
	)
}

export default App
