import { cartModel } from "../../models/cart.js";

const createCartForUser = async ({ userId }) => {
  const cart = await cartModel.create({
    userId,
    items: [],
    totalAmount: 0,
    completed: false,
  });
  await cart.save();
  return cart;
};

export const getActiveCartForUser = async ({ userId }) => {
  let cart = await cartModel.findOne({ userId, completed: false });
  if (!cart) {
    cart = await createCartForUser({ userId });
  }
  return cart;
};
