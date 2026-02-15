import 'dotenv/config'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import { appConfig } from './config/app-config'
import express, { Request, Response } from 'express'

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
    res.status(200).send('<h1>application programming interface for auths 2 fa</h1>')
})

app.listen(appConfig.port, () => {
    console.log(`application running in port ${appConfig.port} on ${appConfig.node_env} mode.`)
})