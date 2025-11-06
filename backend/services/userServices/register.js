import {userModel} from "../../models/user.js";
import bcrypt from "bcrypt";
import { generateJWT } from "../../utils/generateJWT.js";

export const handleRegister = async (req, res) => {
  try {
    const { name, phone, password } = req.body;

    const findUser = await userModel.findOne({ phone });

    if (findUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      name,
      phone,
      password: hashedPass,
    });

    await newUser.save();

    const token = generateJWT(newUser);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 86400000,
    });

    return res.status(200).json({
      message: "User registered successfully",
      phone: newUser.phone,
      token,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
