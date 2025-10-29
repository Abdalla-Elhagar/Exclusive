import {Router} from "express";
import { handleRegister } from "../services/userServices/register.js";

const router = Router()

router.post("/", handleRegister)



export default router