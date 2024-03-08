import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import AboutPage from './aboutPage';
import ConractUsPage from './ConractUsPage';
import Cart from './cart';
import Sign from './sign.page';
import Wishlist from './Wishlist';
import DetailPage from './detailPage';
import { Provider } from 'react-redux';
import store from '../Redux/store';

export default function Pages() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/shop" element={<Shop></Shop>}></Route>
            <Route path="/shop/:sub" element={<Shop></Shop>}></Route>
            <Route path="/details/:id" element={<DetailPage />}></Route>
            <Route path="/about" element={<AboutPage></AboutPage>}></Route>
            <Route path="/contact" element={<ConractUsPage></ConractUsPage>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/signin" element={<Sign></Sign>}></Route>
            <Route path="/wishlist" element={<Wishlist></Wishlist>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}
