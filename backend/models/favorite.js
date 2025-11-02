import mongoose, { Schema } from "mongoose";

const favoriteSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "product",
    },
  ],
}, { timestamps: true });

export const favoriteModel = mongoose.model("favorite", favoriteSchema);
