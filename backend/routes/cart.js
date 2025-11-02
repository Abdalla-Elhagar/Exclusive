import { Router } from "express";
const router = Router();




router.get("/", (req,res)=> {
    const cart = cartModel.find()

    res.status(201),json(cart)

})



export default router;