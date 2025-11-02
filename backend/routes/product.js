import { Router } from "express";
import {productModel} from "../models/product.js"

const router = Router();

router.get("/", async (req, res) => {
  try {
    const products = await productModel.find();

    res.status(201).json(products);
  } catch (err) {
    console.log(err);
  }
});

export default router;
