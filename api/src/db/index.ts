import sql from 'mssql'
import { appConfig } from '../config/app-config'

export default class Database {
    private sqlConfig : sql.config
    public pool : sql.ConnectionPool

    constructor() {
        this.sqlConfig = {
            user : appConfig.database_user,
            password : appConfig.database_password,
            database : appConfig.database_name,
            server : appConfig.database_host,
            port : Number(appConfig.database_port),
            pool : {
                max : 10,
                min : 0,
                idleTimeoutMillis : 30000
            },
            options : {
                encrypt : true,
                trustServerCertificate : true
            }
        }
        this.pool = new sql.ConnectionPool(this.sqlConfig)
    }

    public connect = async () => {
        if (this.pool.connected) {
            await this.pool.close()
        }
        await this.pool.connect()
    }

    public disconnect = async () => {
        try {
            await this.pool.close()
        } catch (err) {
            if (err instanceof Error) {
                throw new Error(err.message)
            }
            throw new Error('INTERNAL_SERVER_ERROR')
        }
    }
}