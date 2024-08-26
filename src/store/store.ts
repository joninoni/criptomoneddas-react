import { create} from "zustand"
import { devtools} from "zustand/middleware"
import { CryptoCurrency, CryptoPrice, Pair } from "../types"
import { fetchCurrentCryptoPrice, getCryptos } from "../services/CryptoService"

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    fetchCrypto: () => Promise<void>
    fetchData: (pair : Pair) => Promise<void>
    result : CryptoPrice
    loading : boolean
}


export const criptoStore = create<CryptoStore>()(
    devtools(
        (set) =>({
        
            cryptoCurrencies : [],

            result:{
                IMAGEURL: "",
                PRICE: "",
                HIGHDAY: "",
                LOWDAY: "",
                CHANGEPCT24HOUR: "",
                LASTUPDATE: "",
            },

            loading : false,

            fetchCrypto : async () => {
                const cryptoCurrencies = await getCryptos()
                set( ()=>({cryptoCurrencies}))
            },

            fetchData: async (pair) => {
                
                set(() => ({ loading: true }));
                
                    const result = await fetchCurrentCryptoPrice(pair);
                    set(() => ({
                        result,
                        loading: false,
                    }));
            }
        }
        )
    )
)