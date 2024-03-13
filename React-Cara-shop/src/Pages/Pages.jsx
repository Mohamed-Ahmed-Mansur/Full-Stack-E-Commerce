import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import AboutPage from "./aboutPage";
import ConractUsPage from "./ConractUsPage";
import Cart from "./cart";
import Sign from "./sign.page";
import Wishlist from "./Wishlist";
import DetailPage from "./detailPage";
import { Provider } from "react-redux";
import store from "../Redux/store";
import SignUpUser from "../Components/SignUp/SignUpUser";
import SignUpSeller from "../Components/SignUp/SignUpSeller";
import VerfiySeller from "../Components/SignUp/verfiySeller";
import Message from "../Components/SignUp/message";
import UpdatePassForm from "../Components/login/updatePassForm";
import UpdatePassCode from "../Components/login/updatePassCode";
import VerifyEmail from "../Components/login/verifyAcc-sendEmail";
import ForgetPassEmail from "../Components/login/ForgetPass-Email";
import VerfiySellerLogin from "../Components/login/verfiySellerLogin";

export default function Pages() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/shop" element={<Shop></Shop>}></Route>
            <Route path="/shop/:category/" element={<Shop></Shop>}></Route>
            <Route
              path="/shop/:category/:subcategory"
              element={<Shop></Shop>}
            ></Route>
            <Route path="/about" element={<AboutPage></AboutPage>}></Route>
            <Route
              path="/contact"
              element={<ConractUsPage></ConractUsPage>}
            ></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/signin" element={<Sign></Sign>}></Route>
            <Route path="/wishlist" element={<Wishlist></Wishlist>}></Route>
            <Route path="/details/:ProductId" element={<DetailPage />}></Route>
            <Route
              path="/signupUser"
              element={<SignUpUser></SignUpUser>}
            ></Route>
            <Route
              path="/signupSeller"
              element={<SignUpSeller></SignUpSeller>}
            ></Route>
            <Route
              path="/user/reg"
              element={<VerfiySeller></VerfiySeller>}
            ></Route>
            <Route path="/Message" element={<Message></Message>}></Route>
            <Route
              path="/updatePassForm"
              element={<UpdatePassForm></UpdatePassForm>}
            ></Route>
            <Route
              path="/updatePassCode"
              element={<UpdatePassCode></UpdatePassCode>}
            ></Route>
            <Route
              path="/verifyEmail"
              element={<VerifyEmail></VerifyEmail>}
            ></Route>
            <Route
              path="/verifyCode"
              element={<VerfiySellerLogin></VerfiySellerLogin>}
            ></Route>
            <Route
              path="/forgetPassEmail"
              element={<ForgetPassEmail></ForgetPassEmail>}
            ></Route>
            {/* <Route path="/profile" element={<Profile></Profile>}></Route>
            <Route path="/profile/:param" element={<Profile></Profile>}></Route> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}
