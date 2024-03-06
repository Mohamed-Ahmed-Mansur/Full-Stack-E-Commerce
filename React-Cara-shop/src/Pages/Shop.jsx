import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Home/Navbar';
import Categories from '../Components/Shop/Categories';
import Search from '../Components/Shop/Search';
import { useParams } from 'react-router-dom';

export default function Shop() {
  const [currSub, setCurrSub] = useState(null);

  const { sub } = useParams();

  useEffect(() => {
    setCurrSub(sub);
  }, [sub]);

  const products = [
    {
      title: 'Astronut T-Shirts',
      price: '500',
      brand: 'adidas',
      rating: 1,
    },
    {
      title: 'shirt',
      price: '900',
      brand: 'Nike',
      rating: 2,
    },
    {
      title: 'trousers',
      price: '400',
      brand: 'adidas',
      rating: 4,
    },
    {
      title: 'hoodie',
      price: '200',
      brand: 'adidas',
      rating: 3,
    },
    {
      title: 'pants',
      price: '1400',
      brand: 'Puma',
      rating: 5,
    },
    {
      title: 'socks',
      price: '200',
      brand: 'Nike',
      rating: 2,
    },
  ];

  return (
    <>
      <Navbar></Navbar>
      <div id="shop" className="container-fluid" style={{ padding: '2rem' }}>
        <div className="row mt-1 mb-5">
          <div className="col-12">
            <div className="banner rounded-4 overflow-hidden d-flex align-items-center justify-content-center">
              <h1>{currSub || 'Categoires'}</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <Categories></Categories>
          </div>
          <div className="col-md-9">
            <Search products={products}></Search>
          </div>
        </div>
      </div>
    </>
  );
}
