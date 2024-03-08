import React, { useState } from 'react';
import prdImg from '../Assets/img/products/f1.jpg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function Card({ product }) {
  const navigate = useNavigate();
  const [heartIcons, setHeartIcons] = useState({});
  const { checkLogin: { checkLogin } } = useSelector(state => state)

  console.log(checkLogin)

  function handleCart(product, e) {
    if(!checkLogin) {
      e.stopPropagation();
      return toast.warning("Please Log in First")
    }
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
    // Removed e.stopPropagation() to allow propagation of the click event
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
    e.stopPropagation();
  }

  function handleHeart(product, e) {
    if(!checkLogin) {
      e.stopPropagation();
      return toast.warning("Please Log in First")
    }
    const favItems = localStorage.getItem('fav');
    let favorites = favItems ? JSON.parse(favItems) : [];

    const existingItemIndex = favorites.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      // If the item already exists in the wishlist, remove it
      favorites.splice(existingItemIndex, 1);
      localStorage.setItem('fav', JSON.stringify(favorites));
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
    } else {
      // If the item doesn't exist in the wishlist, add it
      favorites.push(product);
      localStorage.setItem('fav', JSON.stringify(favorites));
      toast.success('Added to Wishlist Successfully', {
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

    setHeartIcons(prevState => ({
      ...prevState,
      [product.id]: !prevState[product.id]
    }));

    e.stopPropagation();
  }

  function handleNavigate(id) {
    navigate("/details/" + id);
  }

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < product.rating; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }
    return stars;
  };

  return (
    <section id="card" className='position-relative'  onClick={() => handleNavigate(product.id)}>
      <img
        src={product.images && product.images.length > 0 ? product.images[0] : prdImg}
        alt="productImg"
        className="w-100"
        style={{ borderRadius: '20px' }}
      />
      <div
        className="position-absolute py-1 px-2"
        style={{ top: '20px', right: '20px' }}
      >
        <i
          className={`fa-heart${heartIcons[product.id] ? ' fas' : ' far'}`}
          style={{ color: '#ab2402', fontSize: '2rem', cursor: 'pointer' }}
          onClick={(e) => handleHeart(product, e)}
        ></i>
      </div>
      <div className="des">
        <span className="brand">{product.brand}</span>
        <h5 className="title">{product.title.length < 20 ? product.title : product.title.slice(0, 20) + "..."}</h5>
        <div className="stars">
          <span className="brand">({product.rating})</span> 
          <span>{renderStars()}</span>
        </div>
      </div>

      <div className="footer d-flex align-items-center justify-content-between">
        <h4 className="price">${product.price}</h4>
        <div className="cart" onClick={(e) => handleCart(product, e)}>
          <i className="fa fa-cart-shopping"></i>
        </div>
      </div>
    </section>
  );
}
