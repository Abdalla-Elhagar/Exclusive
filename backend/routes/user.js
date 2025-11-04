import { Router } from "express";
import { handleRegister } from "../services/userServices/register.js";
import { handleLogin } from "../services/userServices/login.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";
import { updateData } from "../services/userServices/updateData.js";
import { changePassword } from "../services/userServices/changePassword.js";
import { logOut } from "../services/userServices/logOut.js";
import { checkUserPhone } from "../services/userServices/checkUserPhone.js";
import { userModel } from "../models/user.js";

const router = Router();

router.post("/register", handleRegister);

router.post("/login", handleLogin);

router.put("/update-data", verifyJWT, updateData);

router.put("/change-password", verifyJWT, changePassword);

router.post("/log-out", verifyJWT, logOut);

router.post("/check-user-phone", checkUserPhone);

router.get("/me", verifyJWT, async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

export default router;
