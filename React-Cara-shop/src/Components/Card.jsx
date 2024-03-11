import React, { useEffect, useState } from 'react';
import prdImg from '../Assets/img/products/f1.jpg';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { jwtDecode } from 'jwt-decode';
import { toast } from "react-toastify";
import axios from 'axios';

export default function Card({ product }) {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);
  const cookies = new Cookies();
  const JWT = cookies.get('x-auth-token');
  
  if (JWT) {
    var { user } = jwtDecode(JWT);
  }

  useEffect(() => {
    const fetchData = async () => {
      if (JWT) {
        const { data } = await axios.get(`http://localhost:3001/user/${user.userID}`);
        setWishlist(data[0].wishlist || []);
      }
    };

    fetchData();
  }, [JWT, user]);

  async function getUser() {
    const { data } = await axios.get(`http://localhost:3001/user/${user.userID}`);
    return data[0];
  }

  async function handleCart(product, e) {
    e.stopPropagation();
    if (!JWT) {
      return toast.warning('Please Log in First');
    }
    user = await getUser();
    const { status } = await axios.patch(`http://localhost:3001/user/${user.userID}`, { cart: [...user.cart, product.id] });
    if(status === 200) {
      toast.success('Added to Cart Successfully', {
        position: 'bottom-right',
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
      navigate("/");
    }
  }

  async function handleHeart(product, e) {
    e.stopPropagation();
    if (!JWT) {
      return toast.warning('Please Log in First', {
        position: 'bottom-right',
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
    user = await getUser();
    if (wishlist.includes(product.id)) {
      return toast.warning("Already Added to Your Wishlist!", {
        position: 'bottom-right',
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
    const { status } = await axios.patch(`http://localhost:3001/user/${user.userID}`, { wishlist: [...wishlist, product.id] });
    if(status === 200) {
      toast.success("Added Successfuly", {
        position: 'bottom-right',
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
      setWishlist(pre => [...pre, product.id]);
      navigate("/");
    }
  }

  function handleNavigate(id) {
    navigate('/details/' + id);
  }

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.ratings);
    const remainder = product.ratings - fullStars;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }

    if (remainder >= 0.5) {
      stars.push(<i key={stars.length} className="fa-solid fa-star-half"></i>);
    }

    return stars;
  };

  return (
    <section
      id="card"
      className="position-relative"
      onClick={() => handleNavigate(product.id)}
    >
      <div
        className="image-container"
        style={{ height: '200px', overflow: 'hidden', borderRadius: '20px' }}
      >
        <img
          src={product.images && product.images.length > 0 ? product.images[0] : prdImg}
          alt="productImg"
          className="w-100"
          style={{ objectFit: 'contain', height: '100%', width: 'auto' }}
        />
      </div>
      {!product.boycott && (
        <div
          className="position-absolute py-1 px-2"
          style={{ top: '20px', right: '20px' }}
        >
          <i
            className={`fa-heart${wishlist.includes(product.id) ? ' fas text-danger' : ' far'}`}
            style={{ fontSize: '2rem', cursor: 'pointer' }}
            onClick={(e) => handleHeart(product, e)}
          ></i>
        </div>
      )}
      <div className="des">
        {product.boycott && (
          <h6>
            <span className="badge bg-danger">Boycott</span>
          </h6>
        )}

        <span className="brand">{product.brand}</span>
        <h5 className="title">
          {product.title.length < 20
            ? product.title
            : product.title.slice(0, 20) + '...'}
        </h5>
        <div className="stars">
          <span className="brand">({product.ratings})</span>
          <span>{renderStars()}</span>
        </div>
      </div>

      <div className="footer d-flex align-items-center justify-content-between">
        <h4 className="price">${product.price}</h4>
        {!product.boycott && (
          <div className="cart" onClick={(e) => handleCart(product, e)}>
            <i className="fa fa-cart-shopping"></i>
          </div>
        )}
      </div>
    </section>
  );
}
