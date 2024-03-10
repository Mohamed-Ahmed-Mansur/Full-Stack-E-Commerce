import { configureStore } from '@reduxjs/toolkit';
import SignUpEmailReducer from "./Slice/Email";


const store = configureStore({
  reducer: {
    SignUpEmail:SignUpEmailReducer
  },
});
export default store;


