import { Router } from "express";
import { verifyJWT } from "./../middlewares/verifyJWT.js";
import { addCartItem } from "../services/cartServices/addCartItem.js";
import { getActiveCartForUser } from "../services/cartServices/getActiveCart.js";
import { deleteCartItem } from "../services/cartServices/deleteCartItem.js";
import { quantityControl } from "../services/cartServices/quantityControl.js";
import { cartModel } from "../models/cart.js";
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

    res.status(respose.statusCode).json(respose.data);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/delete-cart-item", verifyJWT, async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId } = req.body;

    const respose = await deleteCartItem({ productId, userId });

    res.status(respose.statusCode).json(respose.data);
  } catch (err) {
    console.log(err);
  }
});

router.put("/quantity-control", verifyJWT, async (req, res) => {
  const userId = req.user._id;
  const { control, productId } = req.body;

  const respose = await quantityControl({ userId, control, productId });

  res.status(respose.statusCode).json(respose.data);
});

router.get("/complete-purchase-process", verifyJWT, async (req, res) => {
  try {
    const userId = req.user._id;

    const cart = await getActiveCartForUser({ userId });

    cart.completed = true;

    await cart.save()

    res.status(200).json("complete-purchase-process");
  } catch (err) {
    console.log(err);
  }
});

router.get("/user-carts", verifyJWT, async (req, res) => {
  try {
    const userId = req.user._id;

    const userCarts = await cartModel.find({userId})

    res.status(200).json(userCarts);
  } catch (err) {
    console.log(err);
  }
});

export default router;
