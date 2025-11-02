import { Router } from "express";
import { verifyJWT } from "./../middlewares/verifyJWT.js";
import { addCartItem } from "../services/cartServices/addCartItem.js";
import { getActiveCartForUser } from "../services/cartServices/getActiveCart.js";
const router = Router();

router.get("/", async (req, res) => {
  const userId = req.user._id;
  const activeCart = await getActiveCartForUser({ userId });

  res.status(201).json(activeCart);
});

router.post("/add-cart-item", verifyJWT, async (req, res) => {
  try {
    const userId = req.user._id;
    const { quantity, productId } = req.body;

    const respose = await addCartItem({ productId, userId, quantity });

    res.status(200).json({ statusCode: respose.statusCode, data: respose.data });
  } catch (err) {
    console.log(err);
  }
});

export default router;
