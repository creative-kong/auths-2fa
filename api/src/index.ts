import 'dotenv/config'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import { appConfig } from './config/app-config'
import express, { Request, Response } from 'express'
import errorsHanlder from './middlewares/errors-handler'

const app = express()

app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended : false }))
app.use(cors({
    origin : appConfig.app_origin,
    credentials : true
}))
app.use(cookieParser())

app.get('/', async (req : Request, res : Response) => {
    res.status(200).json({
        success : true,
        message : 'application programming interface for auths demo application',
        data : {}
    })
})
// app.use('/api/v1/auth')
app.use(errorsHanlder)

app.listen(appConfig.port, () => {
    console.log(`application running in port ${appConfig.port} on ${appConfig.node_env} mode.`)
})