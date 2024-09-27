import { MongoClient } from 'mongodb'; // Importe MongoClient depuis mongodb
import dotenv from 'dotenv';

dotenv.config(); 
const url = process.env.URL_DATABASE || 'mongodb://localhost:27017'; // URL de connexion
const dbName = process.env.DATABASE_NAME || '' // Nom de la base de données


const client = new MongoClient(url); // Crée une nouvelle instance MongoClient
export async function connectToMongo() {
  try {
    await client.connect(); // Tente de se connecter à MongoDB
    console.log("Connecté à MongoDB");
    const db = client.db(dbName); 
    
    return db
    } catch (err) {
      await client.close()
      throw new Error("Erreur lors de la connexion à MongoDB: " + err.message);
    }
}

export async function closedMongodb(){
  await client.close()
}