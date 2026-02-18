import * as z from 'zod'
import jwt from 'jsonwebtoken'
import { RegisterModel } from '../models'
import AppErrors from '../utils/app-errors'

export default class AuthService {
    public register = async (model : z.infer<typeof RegisterModel>) => {
        try {
            
        } catch (err) {
            if (err instanceof AppErrors) {
                throw new AppErrors(err.status, err.message)
            }
            throw new AppErrors(500, 'INTERNAL_SERVER_ERROR');
        }
    }
}