import { createSlice } from "@reduxjs/toolkit";

const sendData = createSlice({
  name: "sendData",
  initialState: { close: true,productHsBeenSent:{},searchName:"", categoryName:"",  },
  reducers: {
    close: (state, action) => {
      state.close = action.payload;
    },
    sendSearch: (state, action) => {
      state.searchName = action.payload
    },
    categories: (state, action) => {
      state.categoryName = action.payload
    },
    sendProductToProductPage: (state, action) => {
      state.productHsBeenSent = action.payload
    },
  },
});

export default sendData.reducer;
export const { close , sendProductToProductPage , sendSearch, categories } = sendData.actions;
