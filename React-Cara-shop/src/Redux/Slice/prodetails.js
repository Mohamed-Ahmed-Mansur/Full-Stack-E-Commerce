import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductAction = createAsyncThunk(
  "product/getProductAction",
  async (id) => {

    const { data } = await axios.get(
      `https://backend-last-v.onrender.com/products/${id}`
    );
    return data[0];
  }
);

const prodetails = createSlice({
  name: "prodetails",
  initialState: { prodetails: null },
  reducers: {
    setProdetails: (state, action) => {
      state.prodetails = action.payload;
      // console.log(state.prodetails )
    },
  },
});

export const { setProdetails } = prodetails.actions;
export default prodetails.reducer;
