import { createSlice } from "@reduxjs/toolkit";

const checkLoginSlice = createSlice({
  name: "checkLogin",
  initialState: {
    checkLogin: 0
  },
  reducers: {
    setLogin: (state) => {
      state.checkLogin = 1;
    },
    setLogout: (state) => {
      state.checkLogin = 0;
    },
  },
});

export const { setLogin, setLogout } = checkLoginSlice.actions;
export default checkLoginSlice.reducer;


