import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'universal-cookie';
import { jwtDecode } from 'jwt-decode';
import axios from "axios";

const cookies = new Cookies();
const JWT = cookies.get('x-auth-token');

export const getUserAction = createAsyncThunk("user/getUserAction", async () => {
  const { data } = await axios.get(`http://localhost:3001/user/${jwtDecode(JWT).user.userID}`);
  return data[0];
});

const userSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    resetUser: (state) => {
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUserAction.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(getUserAction.rejected, (state) => {
      console.log("error");
      state.user = null;
    });
  },
});

export const { resetUser } = userSlice.actions; // Export the resetUser action
export default userSlice.reducer;
