import { createSlice } from "@reduxjs/toolkit";

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUser } = userLoginSlice.actions;
export default userLoginSlice.reducer;
