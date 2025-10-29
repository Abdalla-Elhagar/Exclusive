import {Router} from "express";
import { handleRegister } from "../services/userServices/register.js";
import { handleLogin } from "../services/userServices/login.js";

const router = Router()

router.post("/register", handleRegister)

router.post("/login", handleLogin)




export default router