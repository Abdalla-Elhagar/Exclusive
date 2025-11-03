import { Router } from "express";
import { handleRegister } from "../services/userServices/register.js";
import { handleLogin } from "../services/userServices/login.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";
import { updateData } from "../services/userServices/updateData.js";
import { changePassword } from "../services/userServices/changePassword.js";
import { logOut } from "../services/userServices/logOut.js";

const router = Router();

router.post("/register", handleRegister);

router.post("/login", handleLogin);

router.put("/update-data", verifyJWT, updateData);

router.put("/change-password", verifyJWT, changePassword);

router.post("/log-out", verifyJWT, logOut);


export default router;
