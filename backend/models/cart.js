import mongoose, { Schema } from "mongoose";
import product from "./product";

const cartItemSchema = new Schema({
    product: {type:Schema.Types.ObjectId, ref: "product", require:true},
    unitPrice: Number,
    quantity: Number,
})

const cartSchema = new Schema({
    userId: { type: Schema.Types.ObjectId , ref: "user" , require: true},
    items: [cartItemSchema],
    totalAmount: {type: Number , require},
    status: {type: "active" | "completed", require: true}
})


export const cartModel = mongoose.model("cart", cartSchema)