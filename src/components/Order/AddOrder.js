// import axios from "axios";
// import { Link, useNavigate } from 'react-router-dom';
// import React, { useState } from "react";

// const AddOrder = () => {

//     const navigate = useNavigate();

//     const [user, setUser] = useState({
//         
// //             noOfmeals
// //            ProductName
// //            Image
// //            totalPrice
// //            Description
// //            city
       
//     });

//     const {pid,product_name, price, description } = user;

//     const onInputChange = (e) => {
//         // console.log(e.target.value);
//         setUser({...user,[e.target.name]:e.target.value});
//     };

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         await axios.post("https://640ad0ca81d8a32198d137f0.mockapi.io/productList/", user);
//         alert("WellDone! Dude You are Created SuccessFully Data")
//         navigate("/repair");
//     }

//   return (
//     <div className="container" style={{background: "none"}}>
//       <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">Repair Add User</h2>
//         <form onSubmit={e => onSubmit(e)}>
//           <div className="form-group mt-1 mb-1">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter product id"
//               name="pid"
//               value={pid}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group mt-1 mb-1">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your product name"
//               name="product_name"
//               value={product_name}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group mt-1 mb-1">
//             <input
//               type="number"
//               className="form-control form-control-lg"
//               placeholder="Enter product price"
//               name="price"
//               value={price}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group mt-1 mb-1">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="enter product description"
//               name="description"
//               value={description}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
         

//           <button className="btn btn-primary btn-block m-2">Add product</button>
//           <Link to="/productList" className="btn btn-primary btn-block">Cancel</Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;