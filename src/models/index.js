"use strict";

import mongoose from "mongoose";

const mongooseDateFormat = require("mongoose-date-format");

const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
  productName: {
    type: String,
    required: "Enter product name",
  },
  productCode: {
    type: String,
    required: "Enter product code",
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
  description: {
    type: String,
  },
  tag: {
    type: String,
  },
  created_date: {
    type: Date,
    default: new Date(),
  },
});

ProductSchema.plugin(mongooseDateFormat);
