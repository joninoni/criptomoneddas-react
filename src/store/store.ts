import { create } from "zustand"
import { CryptoCurrency } from "../types"
import { getCryptos } from "../services/CryptoService"

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    fetchCrypto: () => Promise<void>
}


export const criptoStore = create<CryptoStore>( (set) =>({

    cryptoCurrencies : [],

    fetchCrypto : async () => {
        const cryptoCurrencies = await getCryptos()
        set( ()=>({cryptoCurrencies}))
    }
}))