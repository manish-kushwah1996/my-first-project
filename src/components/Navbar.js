import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import logo from "../images/logo01.png";
import { UserContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  console.log(`the navbar user ${state} and ${dispatch}`);

  const RenderList = () => {
    if (state) {
      return (
        <>
        <div>
          <li className="nav-item active">
            <NavLink
              exact
              activeClassName="active-page"
              className="nav-link"
              to="/"
            >
              Home{" "}
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink
              exact
              activeClassName="active-page"
              className="nav-link"
              to="/details"
            >
              Details{" "}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active-page"
              className="nav-link"
              to="/about"
            >
              About Me
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active-page"
              className="nav-link"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active-page"
              className="nav-link"
              to="/logout"
            >
              logout
            </NavLink>
          </li>
        </div>
        </>
      );
    } else {
      return (
        <>
        <div>
          {/* <li className="nav-item active">
            <NavLink
              exact
              activeClassName="active-page"
              className="nav-link"
              to="/"
            >
              Home{" "}
            </NavLink>
          </li> */}
          {/* <li className="nav-item">
            <NavLink
              exact
              activeClassName="active-page"
              className="nav-link"
              to="/about"
            >
              About Me
            </NavLink>
          </li> */}
          {/* <li className="nav-item">
            <NavLink
              exact
              activeClassName="active-page"
              className="nav-link"
              to="/contact"
            >
              Contact
            </NavLink>
          </li> */}

          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active-page"
              className="nav-link"
              to="/login"
            >
              Login
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active-page"
              className="nav-link"
              to="/signup"
            >
              Register
            </NavLink>
          </li>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-whhite bg-dark" style={{height: "877px", width: "15%", flexDirection: "column"}}>
        <NavLink className="navbar-brand" to="/">
        {/* <p>Award <span style={{color: "#019fed"}}>Flight</span></p> */}
  
    {<a  class="btn btn-success" role="button" href="#">Exerboost</a>}
  
          {/* <img
            src={
              "https://icon-library.com/images/flights-icon/flights-icon-15.jpg"
            }
            alt="logo"
          /> */}
        </NavLink>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <RenderList />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
