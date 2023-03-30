import { MongoClient } from "mongodb"

export const connect = (database, coll) => {
    try {
        const client = new MongoClient(process.env.MONGODB_URI)
        const collection = client.db(database).collection(coll)
        return collection
    } catch (error) {
        console.log(error)
        return
    }
}