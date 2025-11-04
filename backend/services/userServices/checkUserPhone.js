import { userModel } from "./../../models/user.js";

export const checkUserPhone = async (req, res) => {
  const { phone } = req.body;

  const findPhone = await userModel.findOne({ phone });

  if (findPhone) {
    res.status(200).json(false);
    return;
  }

  res.status(200).json(true);
};
