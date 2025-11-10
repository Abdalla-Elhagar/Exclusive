import { userModel } from "../../models/user.js";
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

    // Set cookie for non-iPhone devices (Android, Desktop)
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
      maxAge: 86400000,
    });

    // Always return token in response for iPhone
    return res.status(200).json({
      message: "User registered successfully",
      phone: newUser.phone,
      token, // Frontend يحفظه في sessionStorage
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
