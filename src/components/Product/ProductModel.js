import React, { useState } from "react";
// import Footer from "./Footer";
// import Navbar from "./Navbar";
import { Link, useHistory } from "react-router-dom";

function Signup() {
  const navigate = useHistory();

  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    confirm_password: "",
    phone_number: "",
    // gender: "",
    city: "",
    // check: ""
  });

  let name, value;
  const handleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { email, username, password, confirm_password, phone_number, city } =
      user;

    const res = await fetch(
      "http://127.0.0.1/upkeep.crmcity.org:8099/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          password,
          confirm_password,
          phone_number,
          city,
        }),
      }
    );
    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successfull");
      console.log("Registration Successfull");
      navigate("/signin");
    }
  };

  return (
    <>
      <header>
        {/* <Navbar /> */}
        {/* <!-- Background image --> */}
        <div
          id="intro-example"
          class="text-center bg-image"
          style={{
            backgroundImage:
              "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp}')",
            minHeight: "740px",
            backgroundAttachment: "fixed",
          }}
        >
          <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <div
              style={{
                minHeight: "745px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  padding: "25px",
                  width: "35%",
                  background: "white",
                }}
              >
                {/* <!-- Pills content --> */}
                <div class="tab-content">
                  <div>
                    <form method="POST">
                      <div class="text-center mb-3">
                        <p>Sign up with:</p>
                        <button
                          type="button"
                          class="btn btn-secondary btn-floating mx-1"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-secondary btn-floating mx-1"
                        >
                          <i class="fab fa-google"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-secondary btn-floating mx-1"
                        >
                          <i class="fab fa-twitter"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-secondary btn-floating mx-1"
                        >
                          <i class="fab fa-github"></i>
                        </button>
                      </div>

                      <p class="text-center">or:</p>

                      {/* <!-- Email input --> */}
                      <div class="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.email}
                          type="email"
                          name="email"
                          id="registerEmail"
                          class="form-control"
                        />
                        <label class="form-label" for="registerEmail">
                          Email
                        </label>
                      </div>

                      {/* <!-- Username input --> */}
                      <div class="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.username}
                          type="text"
                          name="firstname"
                          id="registerUsername"
                          class="form-control"
                        />
                        <label class="form-label" for="registerUsername">
                          First Name
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.lastnaname}
                          type="text"
                          name="lastname"
                          id="registerUsername"
                          class="form-control"
                        />
                        <label class="form-label" for="registerUsername">
                          lastname
                        </label>
                      </div>

                      {/* <!-- Password input --> */}
                      <div class="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.password}
                          type="password"
                          name="password"
                          id="registerPassword"
                          class="form-control"
                        />
                        <label class="form-label" for="registerPassword">
                          Password
                        </label>
                      </div>

                      {/* <!-- Repeat Password input --> */}
                      <div class="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.confirm_password}
                          type="password"
                          name="confirm_password"
                          id="registerRepeatPassword"
                          class="form-control"
                        />
                        <label class="form-label" for="registerRepeatPassword">
                          Confirm password
                        </label>
                      </div>

                      {/* <!-- Phone input --> */}
                      <div class="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.phone_number}
                          type="number"
                          name="phone_number"
                          id="registerRepeatPassword"
                          class="form-control"
                        />
                        <label class="form-label" for="registerRepeatPassword">
                          Phone Number
                        </label>
                      </div>

                      {/* <!-- Gender input --> */}
                      {/* <div class="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.gender}
                          type="text"
                          name="gender"
                          id="registerRepeatPassword"
                          class="form-control"
                        />
                        <label class="form-label" for="registerRepeatPassword">
                          Gender
                        </label>
                      </div> */}

                      {/* <!-- City input --> */}
                      <div class="form-outline mb-4">
                        <input
                          onChange={handleInputs}
                          value={user.city}
                          type="text"
                          name="city"
                          id="registerRepeatPassword"
                          class="form-control"
                        />
                        <label class="form-label" for="registerRepeatPassword">
                          City
                        </label>
                      </div>
                      {/* <!-- Submit button --> */}
                      <button
                        type="submit"
                        name="signup"
                        value="register"
                        onClick={postData}
                        class="btn btn-primary btn-block mb-3"
                      >
                        Sign in
                      </button>

                      <div class="text-center">
                        <p>
                          Not a member? <Link to="/signin">Login</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <!-- Pills content --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Background image --> */}
      </header>

      {/* <Footer /> */}
    </>
  );
}

export default Signup;
