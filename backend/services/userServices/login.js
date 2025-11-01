import userModel from "../../models/user.js";
import bcrypt from "bcrypt";
import { generateJWT } from "../../utils/generateJWT.js";

export const handleLogin = async (req, res) => {
  const { phone, password } = req.body;

  const findUser = await userModel.findOne({ phone });

  if (!findUser) {
    return res
      .status(403)
      .json({ message: "the phone or password has been error." });
  }

  const checkPassword = await bcrypt.compare(password, findUser.password);

  if (!checkPassword) {
    return res
      .status(403)
      .json({ message: "the phone or password has been error." });
  }

  const token = generateJWT(findUser);

  res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 86400000,
    });

  return res.status(201).json({
    message: "the user loged in.",
    phone: findUser.phone,
    token,
  });
};
