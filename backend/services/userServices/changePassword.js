import { userModel } from "../../models/user.js";
import bcrypt from 'bcrypt';




export const changePassword = async (req, res) => {
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
}