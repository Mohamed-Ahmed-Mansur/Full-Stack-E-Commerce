import { configureStore } from '@reduxjs/toolkit';
import checkLoginReducer from "./Slices/checkLogin";
import userLoginReducer from './Slices/userLogin';

const store = configureStore({
  reducer: {
    checkLogin: checkLoginReducer,
    userLogin: userLoginReducer
  }
});
export default store;
