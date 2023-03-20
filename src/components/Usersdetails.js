import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Usersdetails = () => {
  const [userName, setUserName] = useState("");
  // const [show, setShow] = useState(false);
  // const history = useHistory();

  const userHomePage = async () => {
    const tokenStr = localStorage.getItem("token");
    try {
      const res = await axios.get(
        "https://63f74749833c7c9c60807b98.mockapi.io/register",
        {
          headers: { Authorization: `Bearer ${tokenStr}` },
        }
      );

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
      <div className="container mt-5">
        <div className="text-white">
          <div className="signup-brand" to="#">
            <p>
              All <span style={{ color: "#019fed" }}>Usersdetails</span>
            </p>
            {/* <img
              src={
                "https://icon-library.com/images/flights-icon/flights-icon-15.jpg"
              }
              alt="logo"
            /> */}
          </div>
          <form>
            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
            <table className="table">
              <thead>
                <tr>
                <th scope="col"> S.No.</th>
                  
                  <th scope="col">first name</th>
                  <th scope="col">last name</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">total qty</th>
                  <th scope="col">total price</th>
                  <th scope="col">address</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {userName &&
                  userName.map((user, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.Product_name}</td>
                      <td>{user.total_qty}</td>
                      <td>{user.total_price}</td>
                      <td>{user.address}</td>
                      
                      <td>
                        <a href={user.url}>Link</a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
      {/* <!-- Background image --> */}
    </>
  );
};

export default Usersdetails;
