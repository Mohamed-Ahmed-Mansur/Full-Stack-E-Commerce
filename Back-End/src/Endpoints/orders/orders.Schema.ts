import mongoose from 'mongoose';

export let ordersSchema = new mongoose.Schema({
  orderID: Number,
  userID: Number,
  totalPrice: Number,
  productID: [Number],
  category: [String],
});
