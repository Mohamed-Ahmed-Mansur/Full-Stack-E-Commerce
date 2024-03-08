import React from 'react';
import Facebook from '../Components/login/facebook';
import Google from '../Components/login/google';
import axios from "axios";
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setLogin } from '../Redux/Slices/checkLogin';
import { setUser } from '../Redux/Slices/userLogin';

const Sign = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();

    const email = e.target.children[0].children[0].value;
    const password = e.target.children[1].children[0].value;
    const { data: { message } } = await axios.post("http://localhost:3001/user/log", { email, password }, { withCredentials: true });

    if (message === "Logged-In Successfully") {
      const JWT = cookies.get("x-auth-token");
      const decodedJWT = jwtDecode(JWT);
      dispatch(setLogin());
      dispatch(setUser(decodedJWT));
      navigate("/");
    } else if (message === "Invalid Email Or Password !!") {
      // Show error toast for invalid credentials
      toast.error(message);
    } else if (message === "Please verify your account") {
      // Show warning toast for unverified account
      toast.warning(message);
    }
  }

  return ( 
      <section className="text-center text-lg-start">
      <style>
        {`
      .cascading-right {
        margin-right: -50px;
      }

      @media (max-width: 991.98px) {
        .cascading-right {
          margin-right: 0;
        }
      }
      .btngreen{
        color:#198754
      }
      `}
      </style>

      <div className="container py-4">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div
              className="card cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
              }}
            >
              <div className="card-body p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5 btngreen">Log In</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      name="email"
                      placeholder="Email address"
                      required
                    />
                    <label
                      className="form-label"
                      htmlFor="form3Example3"
                    ></label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      required
                    />
                    <label
                      className="form-label"
                      htmlFor="form3Example4"
                    ></label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-success btn-block mb-4"
                  >
                    Log In
                  </button>

                  <div className="text-center">
                    <p>or sign up with:</p>
                    <div>
                      <div>
                        <button
                          type="button"
                          className=" btn btn-link btn-floating mx-1 "
                        >
                          <Facebook />
                        </button>

                        <button
                          type="button"
                          className="  btn btn-link btn-floating mx-1 "
                          style={{ height: "3.5rem" }}
                        >
                          <Google />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="d-none d-lg-block col-lg-6 mb-5 mb-lg-0">
            <img src="./Assets/img/blog/b3.jpg" style={{ width: "100%" }} alt="login_photo" />
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Sign;