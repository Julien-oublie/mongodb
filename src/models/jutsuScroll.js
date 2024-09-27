import { Schema } from "mongoose";

export const JutsuScrollsShema = new Schema({
    name: String,
    creator: String,
    rank: Number,
    quantity: Number,
    description: String,
    category: Array,
    associatedTechniques: Array

})