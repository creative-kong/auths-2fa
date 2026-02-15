export const getEnv = (key : string, defaultValue : string = "") : string => {
    const value = process.env[key]
    if (!value) {
        if (defaultValue) return defaultValue
        throw Error(`environment variable ${key} not set.`)
    }
    return value
}