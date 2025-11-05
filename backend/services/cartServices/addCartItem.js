import { productModel } from "../../models/product.js";
import { getActiveCartForUser } from "./getActiveCart.js";

export const addCartItem = async ({ productId, quantity, userId }) => {
  try {
    const cart = await getActiveCartForUser({ userId });

    const existsInCart = cart.items.find((p) => p.product.equals(productId));

    if (existsInCart) {
      return { statusCode: 400 ,data: "the product is already in cart" };
    }

    const product = await productModel.findById(productId);

    if (!product) {
      return { statusCode: 400 ,data: "product not found" }
    }

    cart.items.push({ product: productId, unitPrice: product.price, quantity });

    cart.totalAmount += Number(product.price) * Number(quantity)

    const updatedCart = await cart.save();

    return {
        data: updatedCart,
        statusCode: 201,
      };
  } catch (err) {
    console.log(err);
  }
};
