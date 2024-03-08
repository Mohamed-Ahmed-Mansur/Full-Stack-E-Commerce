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
    <>
      <nav style={{ position: "sticky" }}>
        <Navbar></Navbar>
      </nav>
      <section>
        <Landing></Landing>
      </section>
      <main>
        <section>
          <Featured></Featured>
        </section>
        <section>
          <NewArrival></NewArrival>
        </section>
        <section>
          <ImgBanner></ImgBanner>
          <ImgBanner2></ImgBanner2>
        </section>
        <section>
          <Newsletter></Newsletter>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
