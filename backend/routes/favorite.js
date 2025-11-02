import { Router } from "express";
import { favoriteModel } from "../models/favorite.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";

const router = Router();

router.get("/", verifyJWT, async (req, res) => {
  const userId = req.user._id;

  const userFavoriteItems = await favoriteModel.findOne({ userId });

  res.status(200).json(userFavoriteItems);
});

router.post("/add-to-favorites", verifyJWT, async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId } = req.body;

    let favorite = await favoriteModel.findOne({ userId });

    if (!favorite) {
      favorite = await favoriteModel.create({
        userId,
        products: [productId],
      });
    } else if (!favorite.products.includes(productId)) {
      favorite.products.push(productId);
      await favorite.save();
    } else if (!favorite.products.includes(productId)) {
      favorite.products.push(productId);
      await favorite.save();
    }


    res.status(200).json(favorite.products)
  } catch (err) {
    console.log(err);
  }
});

router.delete("/delete-from-favorites", verifyJWT, async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId } = req.body;

    const favorite = await favoriteModel.findOne({ userId })

    favorite.products = favorite.products.filter(p => !p.equals(productId))

    await favorite.save()

    res.status(200).json("the product has been removed from favorite")

  } catch (err) {
    console.log(err);
  }
});




export default router;
