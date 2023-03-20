import React, { useEffect, useState } from "react";
import thapapic from "../images/thapa1.jpg";
import aboutpic from "../images/aboutpic.jpg";

import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const About = () => {
  // const history = useHistory();
  // const [userData, setUserData] = useState({});

  // const callAboutPage = async () => {
  //     try {
  //         // http://upkeep.crmcity.org:8099/Account
  //         const res = await axios.get('http://upkeep.crmcity.org:8099/home', {
  //       //     method: "GET",
  //             headers: {
  //                 Accept: "appllication/json",
  //                 "Content-Type": "application/json",
  //                 "Authorization": localStorage.getItem("token")
  //             },}
  //            // credentials: "include"
  //         );

  //         const data = await res.json();
  //         console.log(data);
  //         setUserData(data);

  //         if (!res.status === 200) {
  //             const error = new Error(res.error);
  //             throw error;
  //         }

  //     } catch (err) {
  //         console.log(err);
  //         history.push('/about');
  //     }
  // }

  // useEffect(() => {
  //     callAboutPage();
  // }, []);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [userName, setUserName] = useState("");
  // const [show, setShow] = useState(false);
  // const history = useHistory();

  const userHomePage = async () => {
    const tokenStr = localStorage.getItem("token");
    try {
      const res = await axios.get("http://upkeep.crmcity.org:8099/Account", {
        headers: { Authorization: `Bearer ${tokenStr}` },
      });

      // const data = await res.json("");
      // console.log(res.data);
      setUserName(res.data);
      // setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userHomePage();
  }, []);

  return (
    <>
    <div style={{flexDirection: "row", display: "flex"}}>
      <Navbar />
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src={
                    userName.first_name === "Arun Choudhary"
                      ? thapapic
                      : aboutpic
                  }
                  alt="thapa"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>
                  {userName.first_name} {userName.last_name}
                </h5>
                <h6>{userName.email}</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKINGS: <span> 1/10 </span>
                </p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <Link
                to="/edit"
                className="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
              >
                Edit About
              </Link>
              {/* <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" /> */}
            </div>
          </div>

          <div className="row">
            {/* left side url  */}
            <div className="col-md-4">
              <div className="profile-work">
                <p> WORK LINK</p>
                <a href="!#" target="_thapa">
                  Flight Youtube
                </a>{" "}
                <br />
                <a href="!#" target="_thapa">
                  Flight Instagram
                </a>{" "}
                <br />
                <a href="!#" target="_thapa">
                  Flight Linkedin
                </a>{" "}
                <br />
                <a href="!#" target="_thapa">
                  Flight News
                </a>
                <br />
                <a href="!#" target="_thapa">
                  Flight Skyee
                </a>{" "}
                <br />
                <a href="!#" target="_thapa">
                  Flight Telegram
                </a>{" "}
                <br />
                <a href="!#" target="_thapa">
                  Flight Google
                </a>{" "}
                <br />
              </div>
            </div>

            {/* right side data toogle  */}

            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <lebal>User Id</lebal>
                    </div>
                    <div className="col-md-6">
                      <p>11111</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <lebal>Name</lebal>
                    </div>
                    <div className="col-md-6 ">
                      <p>
                        {userName.first_name} {userName.first_name}
                      </p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <lebal>Email</lebal>
                    </div>
                    <div className="col-md-6">
                      <p>{userName.email}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <lebal>Phone</lebal>
                    </div>
                    <div className="col-md-6">
                      <p>+91 9876543210</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <lebal>Profession</lebal>
                    </div>
                    <div className="col-md-6">
                      <p>Award Flight</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <lebal>Award Flight</lebal>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <lebal>Award Flight</lebal>
                    </div>
                    <div className="col-md-6">
                      <p>Label</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <lebal>Award Flight</lebal>
                    </div>
                    <div className="col-md-6">
                      <p>Rate</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <lebal>Award Flight</lebal>
                    </div>
                    <div className="col-md-6">
                      <p>URL</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <lebal>Award Flight</lebal>
                    </div>
                    <div className="col-md-6">
                      <p>Work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default About;
