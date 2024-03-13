// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Home';
// import Shop from './Shop';
// import AboutPage from './aboutPage';
// import ConractUsPage from './ConractUsPage';
// import Cart from './cart';
// import Sign from './sign.page';
// import Wishlist from './Wishlist';
// import DetailPage from './detailPage';
// import { Provider } from 'react-redux';
// import store from '../Redux/store';
// import SignUpUser from '../Components/SignUp/SignUpUser';
// import SignUpSeller from '../Components/SignUp/SignUpSeller';
// import VerfiySeller from '../Components/SignUp/verfiySeller';
// import Message from '../Components/SignUp/message';

// export default function Pages() {
//   return (
//     <>
//       <Provider store={store}>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Home></Home>}></Route>
//             <Route path="/home" element={<Home></Home>}></Route>
//             <Route path="/shop" element={<Shop></Shop>}></Route>
//             <Route path="/shop/:category/" element={<Shop></Shop>}></Route>
//             <Route path="/shop/:category/:subcategory" element={<Shop></Shop>}></Route>
//             <Route path="/about" element={<AboutPage></AboutPage>}></Route>
//             <Route path="/contact" element={<ConractUsPage></ConractUsPage>}></Route>
//             <Route path="/cart" element={<Cart></Cart>}></Route>
//             <Route path="/signin" element={<Sign></Sign>}></Route>
//             <Route path="/wishlist" element={<Wishlist></Wishlist>}></Route>
//             <Route path="/details/:ProductId" element={<DetailPage />}></Route>
//             <Route path="/signupUser" element={<SignUpUser></SignUpUser>}></Route>
//             <Route path="/signupSeller" element={<SignUpSeller></SignUpSeller>}></Route>
//             <Route path="/user/reg" element={<VerfiySeller></VerfiySeller>}></Route>
//             <Route path="/Message" element={<Message></Message>}></Route>
//             {/* <Route path="/profile" element={<Profile></Profile>}></Route>
//             <Route path="/profile/:param" element={<Profile></Profile>}></Route> */}
//           </Routes>
//         </BrowserRouter>
//       </Provider>
//     </>
//   );
// }










import React, { useState } from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from '../theme';
import store from '../Redux/store';
import Home from './Home';
import Shop from './Shop';
import AboutPage from './aboutPage';
import ConractUsPage from './ConractUsPage';
import Cart from './cart';
import Sign from './sign.page';
import Wishlist from './Wishlist';
import DetailPage from './detailPage';
import SignUpUser from '../Components/SignUp/SignUpUser';
import SignUpSeller from '../Components/SignUp/SignUpSeller';
import VerfiySeller from '../Components/SignUp/verfiySeller';
import Message from '../Components/SignUp/message';
import UpdatePassForm from '../Components/login/updatePassForm';
import UpdatePassCode from '../Components/login/updatePassCode';
import VerifyEmail from '../Components/login/verifyAcc-sendEmail';
import ForgetPassEmail from '../Components/login/ForgetPass-Email';
import VerfiySellerLogin from '../Components/login/verfiySeller';
import Dashboard from '../scenes/dashboard';
import Team from '../scenes/team';
import Form from "../scenes/form";
import Contacts from '../scenes/contacts';
import Invoices from '../scenes/invoices';
import Topbar from '../scenes/global/Topbar';
import Bar from '../scenes/bar';
import Pie from '../scenes/pie';
import Line from '../scenes/line';
import FAQ from '../scenes/faq';
import Calendar from '../scenes/calendar/calendar';
import Geography from '../scenes/geography';

import Sidebar from '../scenes/global/Sidebar';
import styled from 'styled-components';
import Seller from '../scenes/SellerDetails/seller';
import { SnackbarProvider } from 'notistack';


// Wrapper component for routes with common layout (Sidebar and Topbar)
const LayoutWrapper = ({ children }) => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
  <SnackbarProvider maxSnack={3}>

        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          {/* <div className="content-wrapper"> */}
          <ContentWrapper>
            <Topbar setIsSidebar={setIsSidebar} />
            {children}
          </ContentWrapper>
          </div>
          </SnackbarProvider>
        {/* </div> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

const Pages = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Wrap routes with LayoutWrapper */}
          <Route
            path="/dashboard/*"
            element={
              <LayoutWrapper>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="team" element={<Team />} />
                  <Route path="contacts" element={<Contacts />} />
                  <Route path="invoices" element={<Invoices />} />
                  <Route path="form" element={<Form />} />
                  <Route path="bar" element={<Bar />} />
                  <Route path="pie" element={<Pie />} />
                  <Route path="line" element={<Line />} />
                  <Route path="faq" element={<FAQ />} />
                  <Route path="Seller" element={<Seller />} />
              
                  <Route path="calendar" element={<Calendar />} />
                  <Route path="geography" element={<Geography />} />
                </Routes>
              </LayoutWrapper>
            }
          />
          {/* Other routes without the layout wrapper */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category/" element={<Shop />} />
          <Route path="/shop/:category/:subcategory" element={<Shop />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ConractUsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<Sign />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/details/:ProductId" element={<DetailPage />} />
          <Route path="/signupUser" element={<SignUpUser />} />
          <Route path="/signupSeller" element={<SignUpSeller />} />
          <Route path="/user/reg" element={<VerfiySeller />} />
          <Route path="/Message" element={<Message />} />
          {/* Additional routes */}
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
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default Pages;

const ContentWrapper = styled.div`
  margin-left: /* set the width of your Sidebar */;
  width:100% ;
`;