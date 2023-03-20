import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";

export const EditAbout = () => {
  const history = useHistory();
  const { id } = useParams();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    // image: "",
    email: "",
  });

  const { first_name, last_name, email } = user;

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const tokenStr = localStorage.getItem("token");
    // http://upkeep.crmcity.org:8099/Account/${id}/
    await axios.put(`http://upkeep.crmcity.org:8099/Account`, {
        headers: { Authorization: `Bearer ${tokenStr}` },
    });
    alert("WellDone! Dude You are Edit SuccessFully Data");
    history("/about");
  };

  const loadUser = async () => {
    const tokenStr = localStorage.getItem("token"); 
    const result = await axios.get(
      `http://upkeep.crmcity.org:8099/Account`,{
        headers: { Authorization: `Bearer ${tokenStr}` },
      }
    //   http://upkeep.crmcity.org:8099/Account/${id}
    );
    setUser(result.data);
  };

  return (
    <div className="container" style={{ padding: "100px"}}>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit About</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group mt-1 mb-1">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your First Name"
              name="first_name"
              value={first_name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Last Name"
              name="last_name"
              value={last_name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          {/* <div className="form-group mt-1 mb-1">
            <input
              type="file"
              className="form-control form-control-lg"
              name="image"
              value={image}
              onChange={(e) => onInputChange(e)}
            />
          </div> */}

          <button className="btn btn-primary btn-block">Edit User</button>
          <Link to="/about" className="btn btn-primary btn-block m-1">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

// import React from "react";

// export const EditAbout = () => {
//   return (
//     <div className="container">
//       <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">Edit About</h2>
//         <form onSubmit>
//           <div className="form-group mt-1 mb-1">
//             <input
//               type="email"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Email"
//               name="email"
//             />
//           </div>
//           <div className="form-group mt-1 mb-1">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your First Name"
//               name="first_name"
//             />
//           </div>
//           <div className="form-group mt-1 mb-1">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Last Name"
//               name="last_name"
//             />
//           </div>

//           <button className="btn btn-primary btn-block">Edit About</button>
//           <a href="/repair" className="btn btn-primary btn-block m-1">
//             Cancel
//           </a>
//         </form>
//       </div>
//     </div>
//   );
// };
