import {z} from "zod"
import { CrytoSchema,CryptoCurrencyResponseSchema} from "../schema/crypto-schema"

export type Currency = z.infer<typeof CrytoSchema>

export type CryptoCurrency= z.infer<typeof CryptoCurrencyResponseSchema>