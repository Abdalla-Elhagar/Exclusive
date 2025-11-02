import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    phone: String,
    password: String,
  },
  { timestamps: true }
);

export const userModel = mongoose.model("users", userSchema);
