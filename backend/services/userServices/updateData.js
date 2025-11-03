import { userModel } from "../../models/user.js";

export const updateData = async (req, res) => {
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
};
