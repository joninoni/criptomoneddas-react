import { create } from "zustand"
import { CryptoCurrency, CryptoPrice, Pair } from "../types"
import { fetchCurrentCryptoPrice, getCryptos } from "../services/CryptoService"

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    fetchCrypto: () => Promise<void>
    fetchData: (pair : Pair) => Promise<void>
    result : CryptoPrice
}


export const criptoStore = create<CryptoStore>( (set) =>({

    cryptoCurrencies : [],

    result:{
        IMAGEURL: "",
        PRICE: "",
        HIGHDAY: "",
        LOWDAY: "",
        CHANGEPCT24HOUR: "",
        LASTUPDATE: "",
    },

    fetchCrypto : async () => {
        const cryptoCurrencies = await getCryptos()
        set( ()=>({cryptoCurrencies}))
    },

    fetchData : async (pair) =>{
        const result = await fetchCurrentCryptoPrice(pair)
        set (()=> ({result}))
    }
}))