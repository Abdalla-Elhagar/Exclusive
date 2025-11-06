import { userModel } from "../../models/user.js";

export const updateData = async (req, res) => {
  try {
    const userId = req.user._id;
    const { name, phone } = req.body;

    const user = await userModel.findByIdAndUpdate(userId, {
      name,
      phone,
    });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};
