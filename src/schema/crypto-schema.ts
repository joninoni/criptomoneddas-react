import {z} from "zod"

export const CrytoSchema = z.object({
    code : z.string(),
    name : z.string(),
})