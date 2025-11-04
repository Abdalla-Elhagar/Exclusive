import jwt from "jsonwebtoken";
import { userModel } from "../models/user.js";

export const verifyJWT = async (req, res, next) => {
  try {
    const token = req.cookies.token; 

    if (!token) {
      return res.status(401).json({ message: "No token found" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (err) {
    console.log("JWT Error:", err);
    return res.status(401).json({ message: "Invalid token" });
  }
};