import mongoose from 'mongoose';

export let categorySchema = new mongoose.Schema({
  id: Number,
  name: String,
  image: String,
  creationAt: String,
  updatedAt: String,
});
