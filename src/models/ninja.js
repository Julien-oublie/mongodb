import mongoose from "mongoose";
const { Schema } = mongoose;  

const NinjaSchema = new Schema({
    name: String,
    rank: Number,
    jutsu_mastery: Array,
    clan: String,
    speciality: String,
    borrowing_history: Array

})

module.exports({
    NinjaSchema
})

