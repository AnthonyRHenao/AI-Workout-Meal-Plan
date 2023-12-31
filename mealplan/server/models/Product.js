const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  ingredients: {
    type: String,
    required: true,
  }
  /*category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }*/
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
