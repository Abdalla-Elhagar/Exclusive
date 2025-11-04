import { createSlice } from "@reduxjs/toolkit";

const sendData = createSlice({
  name: "sendData",
  initialState: { close: true,total:0,searchName:"", categoryName:"",  },
  reducers: {
    close: (state, action) => {
      state.close = action.payload;
    },
    sendTotal: (state, action) => {
      state.total = action.payload
    },
    sendSearch: (state, action) => {
      state.searchName = action.payload
    },
    categories: (state, action) => {
      state.categoryName = action.payload
    },
  },
});

export default sendData.reducer;
export const { close , sendTotal , sendSearch, categories } = sendData.actions;
