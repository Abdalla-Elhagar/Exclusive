import { getActiveCartForUser } from "./getActiveCart.js"



export const deleteCartItem = async ({productId, userId})=> {

    let cart = await getActiveCartForUser({userId})

    if(cart.items.length === 0) {
        return {data: "cart items is empty", statusCode: 400}
    }

    cart.items = cart.items.filter(i => !i.product.equals(productId))

    await cart.save()


return {statusCode: 200, data:cart}

}