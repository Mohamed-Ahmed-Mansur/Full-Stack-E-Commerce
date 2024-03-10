import React, { useState } from 'react';
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Home/footer';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';

export default function Wishlist() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const cookies = new Cookies();
  const JWT = cookies.get("x-auth-token");

  function handleHeart(product) {
    const favItems = JSON.parse(localStorage.getItem('fav')) || [];
    const existingItemIndex = favItems.findIndex(item => item.id === product.id);
    
    if (existingItemIndex !== -1) {
      // Remove item from localStorage
      favItems.splice(existingItemIndex, 1);
      localStorage.setItem('fav', JSON.stringify(favItems));
      toast.info('Removed from Wishlist Successfully', {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'custom-toast',
        bodyClassName: 'toast-body',
        toastClassName: 'toast-container',
      });
    }

    // Update state to remove the item from the page
    setProducts(prevProducts => prevProducts.filter(item => item.id !== product.id));
  }

  function handleCart(product) {
    const check = localStorage.getItem('cart');
    if (check) {
      const cartItems = JSON.parse(check);
      const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
      if (existingItemIndex !== -1) {
        // If the item already exists, update its quantity
        cartItems[existingItemIndex].quantity++;
      } else {
        // If the item doesn't exist, add it to the cart
        product.quantity = 1;
        cartItems.push(product);
      }
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } else {
      product.quantity = 1;
      localStorage.setItem('cart', JSON.stringify([product]));
    }
    toast.success('Added to Cart Successfully', {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'custom-toast',
      bodyClassName: 'toast-body',
      toastClassName: 'toast-container',
    });
    navigate("/wishlist")
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }
    return stars;
  };

  useEffect(() => {
    if(JWT) {
      setProducts(JSON.parse(localStorage.getItem('fav')) || []);
    }
  }, [JWT]);

  return (
    <>
      <Navbar />
      <div id="wishlist">
        <Section className=" container-fluid  ">
          <Text className="row justify-content-evenly">
            <H2>My Wishlist</H2>
          </Text>
        </Section>

        <div className="section-p1">
          <div className="row">
            {products.length === 0 ?        
                <div id="empty-cart" className="d-flex justify-content-center align-items-center vh-75">
                  <h1>Your Wish List is <span style={{ fontWeight: "800", color: "#088178"}}>Empty</span></h1>
                </div> : products.map((product, i) => {
              return (
                <section key={i} className="">
                  <div id="card">
                    <div className="d-flex" style={{ gap: '1.5rem' }}>
                      <div style={{ maxWidth: '200px' }}>
                        <img
                          src={product.images[0]}
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
                                className="fas fa-heart"
                                style={{ color: '#ab2402', fontSize: '2rem', cursor: 'pointer' }}
                                onClick={() => handleHeart(product)}
                              ></i>
                            </div>
                          </div>
                          <h5 className="title">{product.title}</h5>
                          <div className="stars">
                            <span className="brand"> ({product.rating})</span>
                            {renderStars(product.rating).map(el => el )}
                          </div>
                        </div>

                        <div className="footer d-flex align-items-center justify-content-between">
                          <h4 className="price">${product.price}</h4>
                          <div className="cart" onClick={() => handleCart(product)}>
                            <i className="fa fa-cart-shopping"></i>
                            <span>add to cart</span>
                            <ToastContainer />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
          <Link to="/cart">
            <button type="button" className="btn btn-primary" style={{ backgroundColor: "#088178", marginLeft: "48%", marginTop: "10rem", border: "1px solid #088178" }}>
              My Cart
            </button>
          </Link>
        </div>
      </div>
      <Footer />
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
