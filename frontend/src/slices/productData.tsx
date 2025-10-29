import { createSlice } from "@reduxjs/toolkit";

const productData = createSlice({
  name: "productData",
  initialState: { data: {} },
  reducers: {
    product1: (state, action) => {
      state.data = action.payload;
    }
  },
});

export default productData.reducer;
export const { product1 } = productData.actions;
