import mongoose, { Schema } from "mongoose";

const cartItemSchema = new Schema({
    product: {type:Schema.Types.ObjectId, ref: "product", required:true},
    unitPrice: Number,
    quantity: {type: Number , required: true, default: 1},
})

const cartSchema = new Schema({
    userId: { type: Schema.Types.ObjectId , ref: "user" , required: true},
    items: [cartItemSchema],
    totalAmount: {type: Number , required: true, default: 0},
    completed: {type: Boolean, default: false}
})


export const cartModel = mongoose.model("cart", cartSchema)