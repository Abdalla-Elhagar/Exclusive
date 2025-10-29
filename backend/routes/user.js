import {Router} from "express";
import { handleRegister } from "../services/userServices/register.js";

const router = Router()

router.post("/register", handleRegister)




export default router