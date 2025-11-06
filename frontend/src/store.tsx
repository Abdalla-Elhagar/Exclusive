import { configureStore } from "@reduxjs/toolkit";
import sendDataReducer from "./slices/sendData";
import productDataReducer from "./slices/productData";
import SelectedUserReducer from "./slices/selectedUser";

export const myStore = configureStore({
  reducer: {
    sendData: sendDataReducer,
    productData: productDataReducer,
    SelectedUser: SelectedUserReducer,
  },
});
