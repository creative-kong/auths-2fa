import { getEnv } from '../utils/get-env'

export const appConfig = ({
    node_env : getEnv('NODE_ENV', 'production'),
    port : Number(getEnv('PORT', '3001')),
    database_host : getEnv('DATABASE_HOST'),
    database_port : getEnv('DATABASE_PORT'),
    database_name : getEnv('DATABASE_NAME'),
    database_user : getEnv('DATABASE_USER'),
    database_password : getEnv('DATABASE_PASSWORD'),
    app_origin : getEnv('APP_ORIGIN', 'http://localhost:3000'),
    base_path : getEnv('BASE_PATH', '/api/v1/')
})