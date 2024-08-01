import {z} from "zod"
import { CrytoSchema } from "../schema/crypto-schema"

export type Currency = z.infer<typeof CrytoSchema>