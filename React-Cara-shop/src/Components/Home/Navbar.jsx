import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
      <div
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
              <div className="dropdown me-3">
                <span
                  className="btn btn-outline-secondary dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-regular fa-user" /> Hi, userName
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
                        class="fa-solid fa-box-open"
                        style={{ width: '20px' }}
                      ></i>
                      Orders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/profile/favourite">
                      <i
                        class="fa-regular fa-heart"
                        style={{ width: '20px' }}
                      ></i>
                      favourite
                    </NavLink>
                  </li>

                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <li className=" m-auto text-center">
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{ color: '#088178', fontWeight: '600' }}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
              {/* SIGN IN/ UP */}
              <div id="signUpNav" className="dropdown me-3">
                <a
                  className="btn dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Signin
                </a>
                <ul className="dropdown-menu p-2 m-auto text-center">
                  <li className="btn btn-warning p-0">
                    <NavLink className="dropdown-item" to="/profile/account">
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
                        to="/profile/orders"
                      >
                        Sign up
                      </NavLink>
                    </span>
                  </li>
                </ul>
              </div>

              <NavLink className="nav-link" to="/wishlist">
                <span className="me-4 position-relative">
                  <i
                    className="fa-solid fa-heart"
                    style={{ fontSize: '1.2rem' }}
                  ></i>
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-dark"
                    style={{
                      backgroundColor: 'rgb(181 188 195)',
                      fontSize: ' 0.6rem',
                    }}
                  >
                    1
                  </span>
                </span>
              </NavLink>

              <NavLink className="nav-link" to="/cart">
                <span className="me-4 position-relative">
                  <i
                    className="fa-solid fa-cart-shopping"
                    style={{ fontSize: '1.2rem' }}
                  ></i>
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-dark"
                    style={{
                      backgroundColor: 'rgb(181 188 195)',
                      fontSize: ' 0.6rem',
                    }}
                  >
                    1
                  </span>
                </span>
              </NavLink>

              <span className="">
                <NavLink className="nav-link " to="/signin">
                  Sign in
                </NavLink>
              </span>
            </div>
          </div>
        </div>
      </div>
  );
}
