import React from 'react';
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Home/footer';
import styled from 'styled-components';
// import Card from '../Components/Card';
import prdImg from '../Assets/img/products/f1.jpg';

export default function Wishlist() {
  const products = [
    {
      title: 'Cartoon Astronut T-Shirts',
      price: '500',
      brand: 'adidas',
      rating: 1,
    },
    {
      title: 'Cartoon Astronut T-Shirts',
      price: '1400',
      brand: 'Puma',
      rating: 5,
    },
    {
      title: 'Cartoon Astronut T-Shirts',
      price: '200',
      brand: 'Nike',
      rating: 2,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }
    return stars;
  };

  return (
    <>
      <Navbar></Navbar>
      <div id="wishlist">
        <Section className=" container-fluid  ">
          <Text className="row justify-content-evenly">
            <H2>My Wishlist</H2>
          </Text>
        </Section>

        <div className="section-p1">
          <div className="row">
            {products.map((product, i) => {
              return (
                <div key={i} className="">
                  <div id="card">
                    <div className="d-flex" style={{ gap: '1.5rem' }}>
                      <div style={{ maxWidth: '200px' }}>
                        <img
                          src={prdImg}
                          alt="productImg"
                          className="w-100"
                          style={{ borderRadius: '20px' }}
                        />
                      </div>

                      <div className="flex-fill">
                        <div className="des">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="brand">{product.brand}</span>
                            <div>
                              <i
                                class="fa-regular fa-heart"
                                style={{ color: '#ab2402', fontSize: '2rem' }}
                              ></i>
                            </div>
                          </div>
                          <h5 className="title">{product.title}</h5>
                          <div className="stars">
                            <span className="brand"> ({product.rating})</span>
                            {renderStars(product.rating)}
                          </div>
                        </div>

                        <div className="footer d-flex align-items-center justify-content-between">
                          <h4 className="price">${product.price}</h4>
                          <div className="cart">
                            <i className="fa fa-cart-shopping"></i> add to cart
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

const Section = styled.section`
  background-image: url('assets/img/about/banner.png');
  width: 100%;
  height: 20vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 14px;
`;

const Text = styled.div`
  margin-top: 20px;
  font-family: 'Spartan', sans-serif;
  margin-bottom: 20px; /* Add some space between sections */
`;

const H2 = styled.h2`
  color: white;
  font-weight: 800;
`;

// const P = styled.p`
//   color: #fff;
//   font-size: 10px;
//   font-weight: 600;
// `;
