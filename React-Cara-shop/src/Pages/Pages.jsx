import React, { useState, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from '../theme';
import store from '../Redux/store';
import styled from 'styled-components';
import Success from './success';
import Index from '../scenes/sellerForm';
import SellerTable from '../scenes/sellerTable/Sellertable';
import Updateseller from '../scenes/updateselldetails.jsx/updateseller';
import Comments from '../scenes/comments/comments';
import Detailsorder from '../scenes/detailsorder/detailsorder';

const Home = React.lazy(() => import('./Home'));
const Shop = React.lazy(() => import('./Shop'));
const AboutPage = React.lazy(() => import('./aboutPage'));
const ConractUsPage = React.lazy(() => import('./ConractUsPage'));
const Cart = React.lazy(() => import('./cart'));
const Sign = React.lazy(() => import('./sign.page'));
const Wishlist = React.lazy(() => import('./Wishlist'));
const DetailPage = React.lazy(() => import('./detailPage'));
const SignUpUser = React.lazy(() => import('../Components/SignUp/SignUpUser'));
const SignUpSeller = React.lazy(() => import('../Components/SignUp/SignUpSeller'));
const VerfiySeller = React.lazy(() => import('../Components/SignUp/verfiySeller'));
const Message = React.lazy(() => import('../Components/SignUp/message'));
const UpdatePassForm = React.lazy(() => import('../Components/login/updatePassForm'));
const UpdatePassCode = React.lazy(() => import('../Components/login/updatePassCode'));
const VerifyEmail = React.lazy(() => import('../Components/login/verifyAcc-sendEmail'));
const ForgetPassEmail = React.lazy(() => import('../Components/login/ForgetPass-Email'));
const Dashboard = React.lazy(() => import('../scenes/dashboard'));
const Team = React.lazy(() => import('../scenes/team'));
const Form = React.lazy(() => import("../scenes/form"));
const Contacts = React.lazy(() => import('../scenes/contacts'));
const Invoices = React.lazy(() => import('../scenes/invoices'));
const Topbar = React.lazy(() => import('../scenes/global/Topbar'));
const Bar = React.lazy(() => import('../scenes/bar'));
const Pie = React.lazy(() => import('../scenes/pie'));
const Line = React.lazy(() => import('../scenes/line'));
const FAQ = React.lazy(() => import('../scenes/faq'));
// const Calendar = React.lazy(() => import('../scenes/calendar/calendar'));
const Geography = React.lazy(() => import('../scenes/geography'));
const Sidebar = React.lazy(() => import('../scenes/global/Sidebar'));
const Seller = React.lazy(() => import('../scenes/SellerDetails/seller'));
const { SnackbarProvider } = React.lazy(() => import('notistack'));
const Profile = React.lazy(() => import('./Profile'));
const VerfiySellerLogin = React.lazy(() => import('../Components/login/verfiySellerLogin'));

const SuspenseFallback = () => (<div className="spinner-border container-fluid d-flex justify-content-center" role="status">
                                  <span className="visually-hidden">Loading...</span>
                                </div>);

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
        <Suspense fallback={<SuspenseFallback />}>
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
                  {/* <Route path="calendar" element={<Calendar />} /> */}
                  <Route path="geography" element={<Geography />} />
                  <Route path="sellerform" element={<Index />} />
                  <Route path="sellerTable" element={<SellerTable />} />
                  <Route path="Updateseller" element={<Updateseller />} />
                  <Route path="Comments" element={<Comments />} />
                  <Route path="Detailsorder" element={<Detailsorder />} />
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
            <Route path="/success" element={<Success />} />
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
              <Route path="/profile" element={<Profile></Profile>}></Route>
              <Route path="/profile/:param" element={<Profile></Profile>}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default Pages;

const ContentWrapper = styled.div`
  margin-left: /* set the width of your Sidebar */;
  width:100% ;
`;