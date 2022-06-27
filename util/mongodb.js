import { MongoClient } from "mongodb"

const MONGODB_URL = process.env.MONGODB_URL
const MONGODB_DB = process.env.MONGODB_DB

if(!MONGODB_DB){
    throw new Error('MONGODB_DB is not defined')
}

if(!MONGODB_URL){
    throw new Error('MONGODB_URL is not defined')
}

let cachedClient = null
let cachedDb = null

export async function connect(){
    if(cachedClient && cachedDb){
        return{
            cachedClient,
            cachedDb
        }
    }

    const opt = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    const client = await MongoClient.connect(MONGODB_URL, opt)
    const db = client.db(MONGODB_DB)
    cachedClient = client
    cachedDb = db

    return {
        client: cachedClient,
        db: cachedDb
    }
}