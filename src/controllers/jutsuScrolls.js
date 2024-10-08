import { connectToMongo, closedMongodb } from "../utils/database.js";
import { ObjectId } from "mongodb";
const collection = 'jutsuScroll'


export async function getJutsScroll(){
    const db = await connectToMongo()
    try{
        const result = await db.collection(collection).find().toArray()
        return result
    }catch{
        console.log('error')
    }

}

export async function insertJutsuScroll(body){
    const db = await connectToMongo();
    try{
        const result = await db.collection(collection).insertOne(body)
        return result.insertedId

    }catch{
        await closedMongodb();
    }

}

export async function updateJutsuScroll(id, body){
    const db = await connectToMongo();
    const result = await db.collection(collection).updateOne({_id: new ObjectId(id)}, {$set: body})
    return result.modifiedCount
}


export async function deleteJutsuScroll(id){
    const db = await connectToMongo();
    const result = await db.collection(collection).deleteOne({ _id: new ObjectId(id) })
    return result.deletedCount
}