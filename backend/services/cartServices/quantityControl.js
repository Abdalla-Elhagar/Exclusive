import { productModel } from "../../models/product.js";
import { deleteCartItem } from "./deleteCartItem.js";
import { getActiveCartForUser } from "./getActiveCart.js";

export const quantityControl = async ({ userId, productId, control }) => {
  try {
    const cart = await getActiveCartForUser({ userId });

    if (!cart) {
      return { statusCode: 404, data: "Cart not found" };
    }

    const productCart = cart.items.find((i) => i.product.equals(productId));
    const product = await productModel.findById(productId);

    if (!productCart) {
      return { statusCode: 400, data: "this product is not found" };
    }

    if (control === "increase") {
      productCart.quantity += 1;
      cart.totalAmount += Number(product.price);
    } else if (control === "decrease") {
      if (productCart.quantity === 1) {
        const deleteReq = await deleteCartItem({ productId, userId });
        
        await cart.save();
        return { statusCode: deleteReq.statusCode, data: deleteReq.data };
      }
      productCart.quantity -= 1;
      cart.totalAmount -= Number(product.price);
    } else {
      return { statusCode: 400, data: "this control is not found" };
    }

    await cart.save();

    return { statusCode: 200, data: cart };
  } catch (err) {
    console.log(err);
  }
};
