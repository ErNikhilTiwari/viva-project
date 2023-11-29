import mongoose from "mongoose"

const shopSchema = mongoose.Schema(
    {
        name: {
            type : String,
            required: true,
        },
        description: {
            type : String,
            required: true,
        },
        price: {
            type : String,
            required: true,
        },
        category: {
            type : String,
            required: true,
        },
        reviews: {
            type : String,
            required: true,
        },
    },
    {
        timestamps : true,
    }
);

export const Book = mongoose.model('abcd', shopSchema );