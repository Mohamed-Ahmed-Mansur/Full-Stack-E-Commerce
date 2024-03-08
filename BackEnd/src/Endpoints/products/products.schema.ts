import mongoose from 'mongoose';

export let ProductsSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  images: [String],
  creationAt: String,
  updatedAt: String,
  category: {
    id: Number,
    name: String,
    image: String,
    creationAt: String,
    updatedAt: String,
  },
});
