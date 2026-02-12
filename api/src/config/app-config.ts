import { getEnv } from '../utils/get-env'

export const appConfig = ({
    nodeEnv : getEnv('NODE_ENV', 'production'),
    port : Number(getEnv('PORT', '3001')),
    origin : getEnv('APP_ORIGIN', 'http://localhost:3000'),
    basePath : getEnv('BASE_PATH', '/api/v1/')
})