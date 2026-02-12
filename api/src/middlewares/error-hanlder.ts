import AppError from '../utils/app-error'
import { ErrorRequestHandler, Request, Response } from 'express'

export const errorHandler : ErrorRequestHandler = (err : AppError, req : Request, res : Response) : Response => {
    return res.status(err.status || 500).json({
        data : {},
        success : false,
        message : err.message || 'INTERNAL_SERVER_ERROR' 
    })
}