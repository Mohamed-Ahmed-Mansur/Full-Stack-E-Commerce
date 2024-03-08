import mongoose from 'mongoose';

export let UserSchema = new mongoose.Schema({
  userID: Number,
  phone: Number,
  name: String,
  address: String,
  email: String,
  password: String,
  isAdmin: Boolean,
  isSeller: Boolean,
  isUser: Boolean,
  flag: Boolean,
  wishlist: [],
  checkout: [],
  cart: [],
});
