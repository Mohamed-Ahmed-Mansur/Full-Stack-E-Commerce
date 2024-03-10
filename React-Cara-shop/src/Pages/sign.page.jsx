import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import Facebook from "../Components/login/facebook";
import Google from "../Components/login/google";

function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  let [flag, setFlag] = useState(false);
  let [sellerFlag, setSellerFlag] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim()) {
      setErrors({ ...errors, email: "Please enter your email." });
      return;
    }
    if (!password.trim()) {
      setErrors({ ...errors, password: "Please enter your password." });
      return;
    }

    try {
      const {
        data: { message },
      } = await axios.post(
        "http://localhost:3001/user/log",
        { email, password },
        { withCredentials: true }
      );
      console.log(message)
      if (message === "Logged-In Successfully") {
        navigate("/");
      } else if (message === "Invalid Email Or Password !!") {
        toast.error(message);
      } else if (message === "Please verify your account") {
        setFlag(true);
      } else if (
        message ===
        "Your application is still in review and once it's verfied you will be noticed over email"
      ) {
        setSellerFlag(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  return (
    <MDBContainer fluid className="mt-4">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center">
              <div className="d-flex align-items-center mb-4">
                <h2 style={{ color: " #088178" }} className="fw-bold mb-0 m-2">
                  Welcome to
                </h2>
                <img
                  className="w-90"
                  src="../../Assets/img/logo.png"
                  alt="logo"
                />
              </div>
              <h2 className="fw-bold mb-2">Sign in now !</h2>
              <p className="text-white-50 mb-3">
                Please enter your login and password!
              </p>

              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              {errors.email && <p className="text-danger">{errors.email}</p>}

              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
              {errors.password && (
                <p className="text-danger">{errors.password}</p>
              )}

              <div className="d-flex justify-content-between align-items-center mb-4 w-100">
                {/* Added inline style for hover effect */}
                <NavLink
                  style={{ color: " #088178", textDecoration: "none" }}
                  to="#"
                  className="text-decoration-none"
                  // Inline style for hover effect
                  onMouseOver={(e) => (e.target.style.color = "blue")}
                  onMouseOut={(e) => (e.target.style.color = "#088178")}
                >
                  Forget password ?
                </NavLink>
                {flag && (
                  <NavLink
                    onMouseOver={(e) => (e.target.style.color = "blue")}
                    onMouseOut={(e) => (e.target.style.color = "red")}
                  >
                    Verify your account now !
                  </NavLink>
                )}
              </div>
              {sellerFlag && (
                <p style={{ color: "green" }}>
                  DearSir, Your application is still in review and once it's
                  verfied you will be rached out by email
                </p>
              )}
              <MDBBtn
                size="lg"
                onClick={handleSubmit}
                style={{ backgroundColor: " #088178" }}
              >
                Login
              </MDBBtn>

              <hr className="my-4" />
              <div className="d-flex gap-4">
                <Google className="" />
                <Facebook />
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignIn;
