import React from 'react';
import Navbar from '../Components/Home/Navbar';
import Landing from '../Components/Home/Landing';
import Featured from '../Components/Home/Featured';
import NewArrival from '../Components/Home/NewArrival';
import Footer from '../Components/Home/footer';
import Newsletter from '../Components/Home/newLetters';
import ImgBanner2 from '../Components/Home/imgBanner2';
import ImgBanner from '../Components/Home/imgBanner';

export default function Home() {
  return (
    <div id="home">
      <Navbar></Navbar>
      <Landing></Landing>
      <Featured></Featured>
      <NewArrival></NewArrival>
      <ImgBanner></ImgBanner>
      <ImgBanner2></ImgBanner2>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}
