import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/img/logo.png';

export default function Navbar() {
  return (
    <>
      <nav
        id="navbar"
        className="navbar navbar-expand-md navbar-light bg-light sticky-top"
      >
        <div className="container-fluid d-flex justify-content-start">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} />
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
                  <NavLink className="nav-link" to="/blog">
                    Blog
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

            <div className="cart d-flex">
            <NavLink className="nav-link" to="/wishlist">
              <span className="me-4 position-relative">
                <i className="fa-solid fa-heart" style={{fontSize: '1.2rem'}}></i>
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
                <i className="fa-solid fa-cart-shopping" style={{fontSize: '1.2rem'}}></i>
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-dark"
                  style={{
                    backgroundColor: 'rgb(181 188 195)',
                    fontSize: ' 0.6rem',
                  }}
                >
                  1
                </span>
              </span></NavLink>

              <span className="">
                <NavLink className="nav-link " to="/signin">
                  Sign in
                </NavLink>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};


