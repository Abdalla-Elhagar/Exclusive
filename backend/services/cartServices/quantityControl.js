import { deleteCartItem } from "./deleteCartItem.js";
import { getActiveCartForUser } from "./getActiveCart.js";

export const quantityControl = async ({ userId, productId, control }) => {
  try {
    const cart = await getActiveCartForUser({ userId });

    const product = cart.items.find((i) => i.product.equals(productId));

    if (control === "increase") {
      product.quantity += 1;
    } else if (control === "decrease") {
        if ( product.quantity === 1 ) {
            deleteCartItem( {productId, userId} )
            return { statusCode: 200, data: "product has been deleted" }
        }
      product.quantity -= 1;
    }
    else {
        return { statusCode: 400, data: "this control is not found" };
    }

    await cart.save();

    return { statusCode: 200, data: product };
  } catch (err) {
    console.log(err);
  }
};
