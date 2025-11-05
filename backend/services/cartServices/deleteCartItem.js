import { productModel } from "../../models/product.js";
import { getActiveCartForUser } from "./getActiveCart.js";

export const deleteCartItem = async ({ productId, userId }) => {
  let cart = await getActiveCartForUser({ userId });
  const product = await productModel.findById(productId);
  cart.totalAmount -= Number(product.price);

  cart.items = cart.items.filter(
    (i) => i.product.toString() !== productId.toString()
  );

  await cart.save();

  return { statusCode: 200, data: cart };
};
