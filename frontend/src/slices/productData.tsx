import { createSlice } from "@reduxjs/toolkit";
import type { productType } from "../data/products";

interface initialStateTypes {
  data: productType[]
}

const initialState:initialStateTypes = {
  data:[]
}

const productData = createSlice({
  name: "productData",
  initialState,
  reducers: {
    StoreProducts: (state, action) => {
      [...state.data] = action.payload;
    }
  },
});

export default productData.reducer;
export const { StoreProducts } = productData.actions;
