import mongoose from "mongoose";
const { Schema } = mongoose;  

const Borrowing = new Schema({
    ninja_id: {
        type: Schema.Types.ObjectId,
        ref: 'Ninja',
        required: true
    },
    jutsu_scroll_id: {
        type: Schema.Types.ObjectId,
        ref: 'jutsuScroll',
        required: true
    },
    date_borrowing: Date,
    date_of_return: Date,
    status: String,
    notes: String
})

module.exports({
    Borrowing
})