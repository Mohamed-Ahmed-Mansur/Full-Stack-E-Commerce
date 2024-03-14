import React, { memo, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction, resetUser } from "../../Redux/Slice/User";

export default memo(function Navbar() {
  const userAuth = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const JWT = cookies.get("x-auth-token");
  if (JWT) {
    var { user } = jwtDecode(JWT);
  }

  function handleLogOut() {
    cookies.remove("x-auth-token");
    dispatch(resetUser());
    navigate("/");
  }

  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  const handleSignUp = () => {
    Swal.fire({
      title: "Choose your role",
      text: "Are you registering as a user or a seller?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "User",
      cancelButtonText: "Seller",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Registering as User",
          text: "Please fill in the required information to complete the registration as a user.",
          icon: "info",
        });
        navigate("/signupUser");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Registering as Seller",
          text: "Please fill in the required information to complete the registration as a seller.",
          icon: "info",
        });
        navigate("/signupSeller");
      }
    });
  };

  return (
    <NavbarContainer
      id="navbar"
      className="navbar navbar-expand-md navbar-light bg-light sticky-top"
      style={{ boxShadow: "0 15px  5px  5px rgba(0, 0, 0, .06)" }}
    >
      <div className="container-fluid d-flex justify-content-start">
        <NavLink className="navbar-brand" to="/">
          <img src="../../Assets/img/logo.png" alt="logo" />
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
            {JWT && (
              <div className="dropdown me-3">
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
                        style={{ width: "20px" }}
                      />
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/profile/orders">
                      <i
                        className="fa-solid fa-box-open"
                        style={{ width: "20px" }}
                      ></i>
                      Orders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/profile/favourite">
                      <i
                        className="fa-regular fa-heart"
                        style={{ width: "20px" }}
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
                      style={{ color: "#088178", fontWeight: "600" }}
                      onClick={handleLogOut}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
            {/* SIGN IN/ UP */}
            {!JWT && (
              <div id="signUpNav" className="dropdown me-3">
                <span
                  className="btn dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b style={{ fontSize: "1rem" }}>S</b>
                  <b style={{ textTransform: "lowercase", fontSize: "1rem" }}>
                    ign in
                  </b>
                </span>
                <ul className="dropdown-menu p-2 m-auto text-center">
                  <li className="btn btn-warning p-0">
                    <NavLink
                      className="dropdown-item fw-bold"
                      to="/signin"
                      style={{ textTransform: "lowercase" }}
                    >
                      <b style={{ fontSize: "0.8rem" }}>S</b>
                      <b
                        style={{
                          textTransform: "lowercase",
                          fontSize: "0.8rem",
                        }}
                      >
                        ign in
                      </b>
                    </NavLink>
                  </li>
                  <li className="mt-3 p-0 w-100">
                    <span className="d-flex align-items-center w-100">
                      {" "}
                      <span
                        style={{ fontSize: "0.8rem", flex: "1", width: "100%" }}
                      >
                        New user?
                      </span>
                      <NavLink
                        className="dropdown-item d-inline-block p-0 w-auto fw-bold"
                        to="/signup"
                        onClick={handleSignUp}
                      >
                        Sign up
                      </NavLink>
                    </span>
                  </li>
                </ul>
              </div>
            )}

            {JWT && (
              <>
                <NavLink className="nav-link" to="/wishlist">
                  <span className="me-4 position-relative">
                    <i
                      className="fa-solid fa-heart"
                      style={{ fontSize: "1.2rem", color: "#088178" }}
                    ></i>
                    {userAuth?.wishlist?.length > 0 && (
                      <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-dark"
                        style={{
                          backgroundColor: "rgb(181 188 195)",
                          fontSize: " 0.6rem",
                        }}
                      >
                        {userAuth?.wishlist?.length}
                      </span>
                    )}
                  </span>
                </NavLink>

                <NavLink className="nav-link" to="/cart">
                  <span className="me-4 position-relative">
                    <i
                      className="fa-solid fa-cart-shopping"
                      style={{ fontSize: "1.2rem", color: "#088178" }}
                    ></i>
                    {userAuth?.cart?.length > 0 && (
                      <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-dark"
                        style={{
                          backgroundColor: "rgb(181 188 195)",
                          fontSize: " 0.6rem",
                        }}
                      >
                        {userAuth?.cart?.length}
                      </span>
                    )}
                  </span>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
});

const NavbarContainer = styled.nav`
  background: linear-gradient(
    to right,
    rgba(139, 169, 192, 255),
    rgba(225, 229, 231, 255)
  );
  box-shadow: 0 15px 5px 5px rgba(0, 0, 0, 0.06);
`;
