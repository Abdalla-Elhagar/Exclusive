import { createSlice } from "@reduxjs/toolkit";

const SelectedUser = createSlice({
  
  name: "SelectedUser",
  initialState: { data: null },
  reducers: {
    logedInUser: (state, action) => {
      state.data = action.payload;    }
  },
});

export default SelectedUser.reducer;
export const { logedInUser } = SelectedUser.actions;
