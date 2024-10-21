const mongoose = require("mongoose")

const Schema = require(	'mongoose').Schema; 
const ProductSchema = new Schema({

    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String],
 
  });

  exports.Productt = mongoose.model('Productt',ProductSchema)