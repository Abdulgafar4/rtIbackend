import mongoose from 'mongoose';

const Schema = mongoose.Schema

export const ProductSchema = new Schema ({
     ProductName: {
        type: String,
        required: 'Enter product name'
     },
     ProductCode: {
        type: String,
        required: 'Enter product code'
     },
     ProductImage: {
        type: String,
     },
     Quantity: {
        type: Number,
        required: 'Enter product quantity'
     },
     Price: {
        type: String,
        required: 'Enter product price'
     },
     CostPrice: {
        type: String,
        required: 'Enter product costprice'
     },
     UnitOfMeasure: {
        type: String,
        required: 'Enter product unit'
     },
     Describtion: {
        type: String,
        required: 'Enter product describtion'
     },
     Tag: {
        type: String,
        required: 'Enter product tag'
     },

})