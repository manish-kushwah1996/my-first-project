import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
// import signpic from "../images/signup.png";

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    city: "",
    password: "",
    confirm_password: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const {
      email,

      first_name,
      last_name,
      city,
      postcode,
      password,
      confirm_password,
      phone_number
    } = user;

    const res = await fetch("http://upkeep.crmcity.org:8090/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
         first_name,
        last_name,
        city,
        postcode,
        password,
        confirm_password,
        phone_number
      }),
    });

    const data = await res.json();

    // I need to change the data to res
    if (data.status === 422 || !data) {
      window.alert("INvalid Registration");
      console.log("INvalid Registration");
    } else {
      window.alert(" Registration Successfull");
      console.log("Successfull Registration");

      history.push("/login");
    }
  };

  return (
    <>
    <div style={{flexDirection: "row", display: "flex"}}>
      <Navbar />
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <div className="signup-brand" to="#">
                <p>
                  Sign <span style={{ color: "#019fed" }}>Up</span>
                </p>
                {/* <img
                  src={
                    "https://icon-library.com/images/flights-icon/flights-icon-15.jpg"
                  }
                  alt="logo" */}
                {/* /> */}
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
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Your Email"
                  />
                </div>

                

                <div className="form-group">
                  <label htmlFor="first_name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="name"
                    autocomplete="off"
                    value={user.first_name}
                    onChange={handleInputs}
                    placeholder="Your First Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="last_name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="name"
                    autocomplete="off"
                    value={user.last_name}
                    onChange={handleInputs}
                    placeholder="Your Last Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="city">
                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="name"
                    autoComplete="off"
                    value={user.city}
                    onChange={handleInputs}
                    placeholder="Your City"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="postcode">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="number"
                    name="postcode"
                    id="number"
                    autocomplete="off"
                    value={user.postcode}
                    onChange={handleInputs}
                    placeholder="Your postcode"
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
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Your Password"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="confirm_password"
                    id="cpassword"
                    autoComplete="off"
                    value={user.confirm_password}
                    onChange={handleInputs}
                    placeholder="Confirm Your Password"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="number">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="number "
                    name="phone_number"
                    id="number"
                    autoComplete="off"
                    value={user.phone_number}
                    onChange={handleInputs}
                    placeholder="enter your number"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="register"
                    onClick={PostData}
                    style={{ background: "#019fed" }}
                  />
                </div>
              </form>
            </div>

            <div className="signup-image">
              {/* <figure>
                <img src={signpic} alt="registration pic" />
              </figure> */}
              <NavLink to="/login" className="signup-image-link">
                I am already register
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Signup;
