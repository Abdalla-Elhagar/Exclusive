import { Router } from "express";
import { handleRegister } from "../services/userServices/register.js";
import { handleLogin } from "../services/userServices/login.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";
import { userModel } from "../models/user.js";
import bcrypt from "bcrypt";

const router = Router();

router.post("/register", handleRegister);

router.post("/login", handleLogin);

router.put("/update-data", verifyJWT, async (req, res) => {
  try {
    const userId = req.user._id;
    const { name, phone } = req.body;

    await userModel.findByIdAndUpdate(userId, {
      name,
      phone,
    });
    res.status(200).json("data has been updated");
  } catch (err) {
    console.log(err);
  }
});

router.put("/change-password", verifyJWT, async (req, res) => {
  try {
    const userId = req.user._id;

    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res
        .status(400)
        .json({ message: "Both current and new passwords are required" });
    }

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const checkPassword = await bcrypt.compare(currentPassword, user.password);

    if (!checkPassword) {
      return res.status(400).json("the current password is not correct");
    }

    await userModel.findByIdAndUpdate(userId, {
      password: await bcrypt.hash(newPassword, 10),
    });
    res.status(200).json("password has been changed");
  } catch (err) {
    console.log(err);
  }
});

export default router;
