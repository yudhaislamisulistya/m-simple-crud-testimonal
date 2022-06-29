import { MongoClient } from "mongodb"

const MONGODB_URL = process.env.MONGODB_URL
const MONGODB_DB = process.env.MONGODB_DB

if(!MONGODB_URL){
    throw new error('Not Define MONGODB URL')
}

if(!MONGODB_DB){
    throw new error('Not Define MONGODB DB')
}

let cachedClient = null
let cachedDb = null

export async function connect(){
    if(cachedClient && cachedDb){
        return {
            client: cachedClient,
            db: cachedDb
        }
    }

    const opt = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

    const client = await MongoClient.connect(MONGODB_URL, opt)
    await client.connect()
    const db = client.db(MONGODB_DB)

    cachedClient = client
    cachedDb = db
    
    return {
        client: cachedClient,
        db: cachedDb
    }
}