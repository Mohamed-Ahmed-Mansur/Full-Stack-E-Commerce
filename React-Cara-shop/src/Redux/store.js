import { configureStore } from '@reduxjs/toolkit';
import SignUpEmailReducer from "./Slice/Email";
import userReducer from "./Slice/User";

const store = configureStore({
  reducer: {
    SignUpEmail:SignUpEmailReducer,
    user: userReducer
  },
});
export default store;


