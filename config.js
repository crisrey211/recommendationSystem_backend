import 'dotenv/config'
export const PORT = process.env.PORT || 3000
export const DBHOST =
    process.env.DBHOST || 'mongodb://username:password@host:port/database'

export const COLLECTION_BASED_CONTENT_NAME =
    process.env.COLLECTION_BASED_CONTENT_NAME || 'content2collection'
export const COLLECTION_BASED_USERS_NAME =
    process.env.COLLECTION_BASED_USERS_NAME || 'content2collection'
export const COLLECTION_BASED_ITEMS_NAME =
    process.env.COLLECTION_BASED_ITEMS_NAME || 'content2collection'
