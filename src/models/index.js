import mongoose from 'mongoose';

const Schema = mongoose.Schema

export const ProductSchema = new Schema ({
     productName: {
        type: String,
        required: 'Enter product name'
     },
     productCode: {
        type: String,
        required: 'Enter product code'
     },
     productImage: {
        type: String,
     },
     quantity: {
        type: Number,
     },
     price: {
        type: String,
     },
     costPrice: {
        type: String,
     },
     unit: {
        type: String,
     },
     describtion: {
        type: String,
     },
     tag: {
        type: String,
     },
     created_Date: {
        type: Date,
        default: Date.now
     },

})
