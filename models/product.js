const mongoose = require('mongoose');
const Review   = require('./review'); // New
const Schema   = mongoose.Schema;

//const ProductSchema = new Schema({
//  name       : String,
//  price      : Number,
//  imageUrl   : String,
//  description: String,
//  reviews    : [Review.schema] // New
//});

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    minlength: [6, 'Name must be greater than 6 characters'],
    maxlength: [100, 'Name must be under 100 characters']
  },
  price: {
    type: Number,
    required: [true, 'Please enter the product\'s price'],
    min: [0, 'Price can\'t be negative'],
    max: [9999999999, 'This is unreasonably expensive, please try again.']
  },
  imageUrl: {
    type: String,
    required: [true, 'Please enter the product\'s image url'] 
  },
  description: String,
  reviews: [Review.schema]
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
