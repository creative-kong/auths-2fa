import 'dotenv/config'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import { appConfig } from './config/app-config'
import { errorHandler } from './middlewares/error-hanlder'
import express, { Request, Response, NextFunction } from 'express'

const app = express()
const base_path = appConfig.basePath

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended : false }))
app.use(cors({
    origin : appConfig.origin,
    credentials : true
}))
app.use(cookieParser())
appConfig.nodeEnv == 'development' ? app.use(morgan('dev')) : app.use(morgan('tiny'))

app.get('/', (req : Request, res : Response, next : NextFunction) => {
    res.status(200).send('<h1>Application Programming Interface</h1>')
})

app.use(errorHandler)

app.listen(appConfig.port, () => {
    console.log(`application starting on port ${appConfig.port} in ${appConfig.nodeEnv} mode.`)
})