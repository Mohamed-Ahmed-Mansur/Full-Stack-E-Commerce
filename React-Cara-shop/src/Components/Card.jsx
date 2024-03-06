import React from 'react';
import prdImg from '../Assets/img/products/f1.jpg';

export default function Card({ product }) {
  console.log(product);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < product.rating; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }
    return stars;
  };

  return (
    <div id="card" className='position-relative'>
      <img
        src={prdImg}
        alt="productImg"
        className="w-100"
        style={{ borderRadius: '20px' }}
      />
      <div
        className="position-absolute py-1 px-2"
        style={{ top: '20px', right: '20px' }}
      >
        <i class="fa-regular fa-heart" style={{ color: '#ab2402', fontSize: '1.5rem' }}></i>
      </div>
      <div className="des">
        <span className="brand">{product.brand}</span>
        <h5 className="title">{product.title}</h5>
        <div className="stars">
          <span className="brand"> ({product.rating})</span> {renderStars()}
        </div>
      </div>

      <div className="footer d-flex align-items-center justify-content-between">
        <h4 className="price">${product.price}</h4>
        <div className="cart">
          <i className="fa fa-cart-shopping"></i>
        </div>
      </div>
    </div>
  );
}
