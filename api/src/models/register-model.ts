import * as z from 'zod'

export const RegisterModel = z.object({
    firstName : z.string(),
    lastName : z.string(),
    email : z.string().email(),
    password : z.string()
})