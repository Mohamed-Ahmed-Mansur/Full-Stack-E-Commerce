import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Cookies from 'universal-cookie';
import { jwtDecode } from "jwt-decode";

export default function Navbar() {
  const cookies = new Cookies(); 
  const JWT = cookies.get("x-auth-token");
  const navigate = useNavigate();
  if(JWT) {
    var { user } = jwtDecode(JWT);
  }
  // Retrieve cart and fav arrays from localStorage
  const cart = JSON.parse(localStorage.getItem('cart')) || null;
  const fav = JSON.parse(localStorage.getItem('fav')) || null;

  // Function to sum the quantity values from an array of objects
  const sumQuantity = (items = []) => {
    if (!items) {
      return false;
    }
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  // Sum the quantity values in the cart array
  const cartTotalQuantity = sumQuantity(cart);

  // Sum the quantity values in the fav array
  const favTotalQuantity = sumQuantity(fav);
  function handleLogOut() {
    cookies.remove('x-auth-token');
    navigate("/");
  }

  return (
      <nav
        id="navbar"
        className="navbar navbar-expand-md navbar-light bg-light sticky-top"
        style={{   boxShadow: "0 15px  5px  5px rgba(0, 0, 0, .06)"}}
      >
        <div className="container-fluid d-flex justify-content-start">
          <NavLink className="navbar-brand" to="/">
            <img src='../../Assets/img/logo.png' alt="logo" />
          </NavLink>

          <div className="navCont d-flex align-items-center flex-fill justify-content-end justify-content-sm-end ">
            <button
              className="navbar-toggler order-3 ms-3 border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/shop">
                    Shop
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="cart d-flex align-items-center">
              {/* PROFILE */}
              {JWT && <div className="dropdown me-3">
                <span
                  className="btn btn-outline-secondary dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-regular fa-user" /> Hi, {user.name}
                </span>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/profile/account">
                      <i
                        className="fa-regular fa-user"
                        style={{ width: '20px' }}
                      />
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/profile/orders">
                      <i
                        className="fa-solid fa-box-open"
                        style={{ width: '20px' }}
                      ></i>
                      Orders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/profile/favourite">
                      <i
                        className="fa-regular fa-heart"
                        style={{ width: '20px' }}
                      ></i>
                      favourite
                    </NavLink>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li className=" m-auto text-center">
                    <button
                      className="dropdown-item"
                      style={{ color: '#088178', fontWeight: '600' }}
                      onClick={handleLogOut}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>}
              {/* SIGN IN/ UP */}
              {!JWT && <div id="signUpNav" className="dropdown me-3">
                <span
                  className="btn dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sign in
                </span>
                <ul className="dropdown-menu p-2 m-auto text-center">
                  <li className="btn btn-warning p-0">
                    <NavLink className="dropdown-item" to="/signin">
                      Sign in
                    </NavLink>
                  </li>
                  <li className="mt-3 p-0 w-100">
                    <span className="d-flex align-items-center w-100">
                      {' '}
                      <span style={{ fontSize: '0.8rem',flex: '1', width: '100%' }}>
                        New user?
                      </span>
                      <NavLink
                        className="dropdown-item d-inline-block p-0 w-auto fw-bold"
                        to="/signup"
                      >
                        Sign up
                      </NavLink>
                    </span>
                  </li>
                </ul>
              </div>}

              {JWT && <><NavLink className="nav-link" to="/wishlist">
                <span className="me-4 position-relative">
                  <i
                    className="fa-solid fa-heart"
                    style={{ fontSize: '1.2rem' }}
                  ></i>
                 {fav && <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-dark"
                    style={{
                      backgroundColor: 'rgb(181 188 195)',
                      fontSize: ' 0.6rem',
                    }}
                  >
                    {favTotalQuantity}
                  </span>}
                </span>
              </NavLink>

              <NavLink className="nav-link" to="/cart">
                <span className="me-4 position-relative">
                  <i
                    className="fa-solid fa-cart-shopping"
                    style={{ fontSize: '1.2rem' }}
                  ></i>
                {cart && <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-dark"
                    style={{
                      backgroundColor: 'rgb(181 188 195)',
                      fontSize: ' 0.6rem',
                    }}
                  >
                    {cartTotalQuantity}
                  </span>}
                </span>
              </NavLink></>}
            </div>
          </div>
        </div>
      </nav>
  );
}
