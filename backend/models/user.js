import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    phone: String,
    password: String,
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);
export default userModel;
