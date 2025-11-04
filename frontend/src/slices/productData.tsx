import { createSlice } from "@reduxjs/toolkit";
import type { productType } from "../Types/products";
import type { favoriteTypes } from "../Types/favorite";
import type { cartTypes } from "../Types/cart";

interface initialStateTypes {
  data: productType[],
  favorite: favoriteTypes[],
  cart: cartTypes[]
}

const initialState:initialStateTypes = {
  data:[],
  cart: [],
  favorite:[],
}

const productData = createSlice({
  name: "productData",
  initialState,
  reducers: {
    StoreProducts: (state, action) => {
      [...state.data] = action.payload;
    },
    userCart: (state, action) => {
      [...state.cart] = action.payload;
    },
    userFavorite: (state, action) => {
      [...state.favorite] = action.payload;
    },
    
  },
});

export default productData.reducer;
export const { StoreProducts, userCart, userFavorite } = productData.actions;
