import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  favorite: { products: [] },
  cart: { items: [], totalAmount: 0 },
  data: [],
}

const productData = createSlice({
  name: "productData",
  initialState,
  reducers: {
    StoreProducts: (state, action) => {
      state.data = action.payload;
    },
    userCart: (state, action) => {
      state.cart = action.payload;
    },
    userFavorite: (state, action) => {
      state.favorite = action.payload;
    },
    
  },
});

export default productData.reducer;
export const { StoreProducts, userCart, userFavorite } = productData.actions;
