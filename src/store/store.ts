import { create } from "zustand"
import { CryptoCurrency, Pair } from "../types"
import { fetchCurrentCryptoPrice, getCryptos } from "../services/CryptoService"

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    fetchCrypto: () => Promise<void>
    fetchData: (pair : Pair) => Promise<void>
}


export const criptoStore = create<CryptoStore>( (set) =>({

    cryptoCurrencies : [],

    fetchCrypto : async () => {
        const cryptoCurrencies = await getCryptos()
        set( ()=>({cryptoCurrencies}))
    },

    fetchData : async (pair) =>{
        await fetchCurrentCryptoPrice(pair)
    }
}))