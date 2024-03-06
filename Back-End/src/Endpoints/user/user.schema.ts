import mongoose from 'mongoose';

export let UserSchema = new mongoose.Schema({
  userId: Number,
  name: String,
  age: Number,
  email: String,
  password: String,
  isAdmin: Boolean,
  isSeller: Boolean,
  isUser: Boolean,
  wishlist: [],
  checkout: [],
  cart: [],
});
