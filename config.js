import 'dotenv/config'
export const PORT = process.env.PORT || 3000
export const DBHOST =
    process.env.DBHOST || 'mongodb://username:password@host:port/database'
