import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const Home = () => {
  // const [userName, setUserName] = useState("");
  // const [show, setShow] = useState(false);
  // const history = useHistory();

  // const userHomePage = async () => {
  //   const tokenStr = localStorage.getItem("token");
  //   try {
  //     const res = await axios.get("http://upkeep.crmcity.org:8099/Account", {
  //       headers: { Authorization: `Bearer ${tokenStr}` },
  //     });

  //     const data = await res.json();
  //     console.log(data);
  //     setUserName(data.name);
  //     setShow(true);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   userHomePage();
  // }, []);

  // const [users, setUsers] = useState([]);

  // const [isLoading, setIsLoading] = useState(true);

  // const [from, setFrom] = useState("");
  // const [to, setTo] = useState("");
  // const [fromDate, setFromDate] = useState("");
  // const [toDate, setToDate] = useState("");

  // const submitUser = async (e) => {
  //   e.preventDefault();

  //   // http://upkeep.crmcity.org:8099/home
  //   const res = await fetch("http://upkeep.crmcity.org:8099/home", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       from,
  //       to,
  //       fromDate,
  //       toDate,
  //     }),
  //   });
  //   const data = res.json();

  //   if (res.status === 400 || !data) {
  //     window.alert("Invalid Data");
  //     console.log("Invalid Data");
  //   } else {
  //     //   localStorage.setItem("token", JSON.stringify(data));
  //     window.alert("Data Successfull");
  //     console.log("Data Successfull");
  //     // history("/");
  //   }
  // };

  // const history = useHistory();
  // const [user, setUser] = useState({
  //   source: "",
  //   destination: "",
  //   startdate: "",
  //   enddate: "",
  // });

  // let name, value;

  // const handleInputs = (e) => {
  //   console.log(e);
  //   name = e.target.name;
  //   value = e.target.value;

  //   setUser({ ...user, [name]: value });
  // };

  // const PostData = async (e) => {
  //   e.preventDefault();

  //   const { source, destination, startdate, enddate } = user;

  //   const res = await fetch("http://upkeep.crmcity.org:8099/home", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       source,
  //       destination,
  //       startdate,
  //       enddate,
  //     }),
  //   });

  //   const data = await res.json();
  //   // console.log(data);

  //   // I need to change the data to res
  //   if (data.status === 422 || !data) {
  //     window.alert("INvalid Registration");
  //     console.log("INvalid Registration");
  //   } else {
  //     window.alert(" Registration Successfull");
  //     console.log("Successfull Registration");

  //     history.push("/details");
  //   }
  // };

  const history = useHistory();
  const [user, setUser] = useState({
    source: "",
    destination: "",
    startdate: "",
    enddate: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
 
  const loginUser = async (e) => {
    e.preventDefault();

    const loginRes = await axios.post("http://upkeep.crmcity.org:8099/home");

    const data = loginRes.data;
    console.log(data)

    if (loginRes.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      localStorage.getItem("token", data?.Token?.access);
      window.alert("Login Successfull");
      history.push("/");
    }
  };
  return (
    <>
    <div style={{flexDirection: "row", display: "flex", background: "yellow"}}>
      <Navbar />
      <div>
      <h1>lsdkflds</h1>
      <h1>lsdkflds</h1>
      <h1>lsdkflds</h1>
      <h1>lsdkflds</h1>
      <h1>lsdkflds</h1>
      </div>
    </div>
      {/* <div className="home-page">
        <div className="home-div">
          <p className="pt-5">WELCOME</p>
          <h1>{userName}</h1>
          <h2>
            {" "}
            {show ? (
              "Before Sign in"
            ) : (
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                  <h1 className="mb-4">
                    Award{" "}
                    <span className="text-primary text-gradient">Flight</span>
                    <span className="m-3">
                      <i className="fas fa-plane-departure"></i>
                    </span>
                  </h1>
                  <form> */}
      {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
      {/* <div className="row mb-4">
                      <div className="col">
                        <div className="form" method="POST">
                          <select
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                            name="from"
                            className="form-control"
                          >
                            <option disabled selected>
                              From...
                            </option>
                            {isLoading ? (
                              <h1>Loading...</h1>
                            ) : (
                              users.map((option, index) => (
                                <option key={index} value={option.name.first}>
                                  {option.name.first}
                                </option>
                              ))
                            )}
                          </select>
                        </div>
                      </div>

                      <div className="col">
                        <div className="form">
                          <select
                            value={to}
                            name="to"
                            onChange={(e) => setTo(e.target.value)}
                            className="form-control"
                          >
                            <option disabled selected>
                              To...
                            </option>
                            {isLoading ? (
                              <h1>Loading...</h1>
                            ) : (
                              users.map((option, index) => (
                                <option key={index} value={option.name.last}>
                                  {option.name.last}
                                </option>
                              ))
                            )}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col">
                        <div className="form">
                          <input
                            type="date"
                            id="form6Example1"
                            className="form-control"
                            value={toDate}
                            name="toDate"
                            onChange={(e) => setToDate(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form">
                          <input
                            type="date"
                            id="form6Example2"
                            className="form-control"
                            value={fromDate}
                            name="fromDate"
                            onChange={(e) => setFromDate(e.target.value)}
                          />
                        </div>
                      </div>
                    </div> */}

      {/* <!-- Submit button --> */}
      {/* <Link to="/details">
                      <button
                        type="submit"
                        value="submit"
                        name="submit"
                        onClick={submitUser}
                        className="btn btn-primary btn-block mb-4"
                      >
                        Check Place
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            )}
          </h2>
        </div>
      </div> */}

      {/* <div className="home-page">
        <div className="home-div">
          <p className="pt-5">WELCOME</p>
          <h1>{}</h1>
          <h2>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-4">
                  Award{" "}
                  <span className="text-primary text-gradient">Flight</span>
                  <span className="m-3">
                    <i className="fas fa-plane-departure"></i>
                  </span>
                </h1>
                <form> */}
                  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                  {/* <div className="row mb-4">
                    <div className="col">
                      <div className="form" method="POST">
                        <select
                          value={user.source}
                          onChange={handleInputs}
                          name="source"
                          className="form-control"
                        >
                          <option disabled selected>
                            From...
                          </option>
                          <option>HKG0</option>
                          <option>HKG1</option>
                          <option>HKG3</option>
                          <option>HKG4</option>
                          <option>HKG5</option>
                        </select>
                      </div>
                    </div>

                    <div className="col">
                      <div className="form">
                        <select
                          value={user.destination}
                          name="destination"
                          onChange={handleInputs}
                          className="form-control"
                        >
                          <option disabled selected>
                            To...
                          </option>
                          <option>BLR0</option>
                          <option>BLR1</option>
                          <option>BLR2</option>
                          <option>BLR3</option>
                          <option>BLR4</option>
                          <option>BLR5</option>
                        </select>
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="row mb-4">
                  <div className="col">
                      <div className="form">
                        <input
                          type="text"
                          id="form6Example1"
                          className="form-control"
                          value={user.source}
                          name="source"
                          onChange={handleInputs}
                          placeholder="From..."
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form">
                        <input
                          type="text"
                          id="form6Example1"
                          className="form-control"
                          value={user.destination}
                          name="destination"
                          onChange={handleInputs}
                          placeholder="To..."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col">
                      <div className="form">
                        <input
                          type="date"
                          id="form6Example1"
                          className="form-control"
                          value={user.startdate}
                          name="startdate"
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form">
                        <input
                          type="date"
                          id="form6Example2"
                          className="form-control"
                          value={user.enddate}
                          name="enddate"
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>

                  {/* <!-- Submit button --> */}
                  {/* <Link to="/details">
                    <button
                      type="submit"
                      value="submit"
                      name="submit"
                      onClick={loginUser}
                      className="btn btn-primary btn-block mb-4"
                    >
                      Check Place
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </h2>
        </div>
      </div> */} 
    </>
  );
};

export default Home;
