import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  title: String,
  image: String,
  price: Number,
  description: String,
  brand: String,
  model: String,
  color: String,
  category: String,
  discount: Number,
  rate: Number,
  sales: Number,
});

const product = mongoose.model("product", productSchema);

export default product
