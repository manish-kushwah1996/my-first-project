import React, { useState, useContext } from "react";
// import loginpic from "../images/login.png";
import { NavLink, useHistory } from "react-router-dom";

import { UserContext } from "../App";

import axios from 'axios';
import Navbar from "./Navbar";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = localStorage.getItem('token');
  console.log(token)

  const loginUser = async (e) => {
    e.preventDefault();

    const loginRes = await axios.post("http://upkeep.crmcity.org:8070/api/user/admin_login",
      {
        email,
        password,
      },
    );

    const data = loginRes.data;

    if (loginRes.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      
      localStorage.setItem("token", data?.Token?.access);
      dispatch({ type: "USER", payload: true });
      window.alert("Login Successfull");
      history.push("/");
    }
  };

  return (
    <>
    <div style={{flexDirection: "row", display: "flex"}}>
    <Navbar />
      <section className="sign-in">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-image">
              {/* <figure>
                <img src={loginpic} alt="Login pic" />
              </figure> */}
              <NavLink to="/signup" className="signup-image-link">
                Create an Account
              </NavLink>
            </div>

            <div className="signin-form">
              <div className="signup-brand" to="#">
                <p>
                  Sign <span style={{ color: "#019fed" }}>In</span>
                </p>
                {/* <img
                  src={
                    "https://icon-library.com/images/flights-icon/flights-icon-15.jpg"
                  }
                  alt="logo"
                /> */}
              </div>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your Password"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log In"
                    style={{ background: "#019fed" }}
                    onClick={loginUser}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Login;
