import { createSlice } from "@reduxjs/toolkit";

const selected: any = localStorage.getItem("selectedUser")
const initialUser = selected? JSON.parse(selected) : []

const SelectedUser = createSlice({
  
  name: "SelectedUser",
  initialState: { selectedData: initialUser },
  reducers: {
    sUser: (state, action) => {
      state.selectedData = action.payload;

      window.localStorage.setItem(
        "selectedUser",
        JSON.stringify(state.selectedData)
      );
    },
    updateFavorites: (state, action) => {
      state.selectedData = action.payload;
      window.localStorage.setItem(
        "selectedUser",
        JSON.stringify(state.selectedData)
      );
    },
  },
});

export default SelectedUser.reducer;
export const { sUser, updateFavorites } = SelectedUser.actions;
