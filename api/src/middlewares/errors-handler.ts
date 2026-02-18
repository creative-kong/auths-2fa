import AppErrors from '../utils/app-errors'
import { ErrorRequestHandler, Request, Response, NextFunction, response } from 'express'

const errorsHanlder : ErrorRequestHandler = (err : AppErrors, req : Request, res : Response, next : NextFunction) : Response => {
    return res.status(err.status || 500).json({
        success : false,
        message : err.message || 'INTERNAL_SERVER_ERROR',
        data : {}
    })
}

export default errorsHanlder