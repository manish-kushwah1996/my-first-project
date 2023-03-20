// // import { useState, useEffect } from "react"
// // import { Table } from "react-bootstrap";
// // function ProductList() {
// //   // const[data,setData]=useState([]);
// //   // useEffect(() =>{
// //   //    getdata();


// //   // },[])
// //    async function deleteOperation(id){
// //    let result=await fetch("   " + id,{
// //     method:'DELETE'
// //    }) ;
// //    result =await result.json();
// //    console.log(result)
// //    getData();
// //   }
// //    async function getData()
// //   {
// //     // let result= await fetch("");
// //   //    result=await result.json();
// //   //    setData(result)
// //   }
// //   return (
// //     <div className="App">
// //       <h1>Product List</h1>
// //       <Table>
// //         <thead>
// //           <tr>
// //             <th>id</th>
// //             <th>ProductName</th>
// //             <th>Image</th>
// //             <th>Price</th>
// //             <th>Description</th>
// //             <th>Operation</th>

// //           </tr>
// //         </thead>
// //         <tbody>
             
// //        
// //                     data.map((item) =>{
// //                      <tr>
// //                         <td>{item.id}</td>
// //                         <td>{item.productName}</td>
// //                         <td>{item.image}</td>
// //                         <td>{item.price}</td>
// //                         <td>{item.Description}</td>
// //                         <td><span onClick={() =>{deleteOperation(item.id)}} className="Delete">Delete</span></td>
// //                      </tr>
// //                     })
// //                 }

// //         </tbody>
// //       </Table>


// //     </div>
// //   )
// // }
// // export default ProductList

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const ProductList = () => {

//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     loadUser()
//   }, []);

//   const loadUser = async () => {
//     const result = await axios.get("https://640ad0ca81d8a32198d137f0.mockapi.io/productList/");
//     // console.log(result);
//     setUsers(result.data);
//   }

//   const deleteUser = async (id) => {
//     await axios.delete(`https://640ad0ca81d8a32198d137f0.mockapi.io/productList/${id}/`);
//     alert(`Dude! You are Sure to Deleting ${id}`)
//     loadUser();
//   } 

//   return (
//     <div className='container' style={{display: "block", background: "none"}}>
//       <h1>ProductList Page</h1>
//       <div class= "d-flex justify-content-end">
//       <Link to="/addProduct" className="btn btn-outline-primary">Add product</Link>
//       </div>
//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">Series No.</th>
//             <th scope="col">ID</th>
//             <th scope="col" >image</th>
//             <th scope="col">Product Name</th>
            
//             <th scope="col">Price</th>
//             <th scope="col">description</th>
            
            
            
//             <th scope="col">Action</th>
//           </tr>
//         </thead>
//         <tbody className="table-group-divider">
//         {users.map((user, index) => (
//           <tr>
//             <th scope="row">{index+1}</th>
//             <td>{user.pid}</td>
//             <td><img style={{width:120}} src={'img2/food11.jpg'+user.file_path}/></td>
//             <td>{user.product_name}</td>
//             <td>{user.price}</td>
//             <td>{user.description}</td>
            
            
//             <td>
//               <Link className='btn btn-outline-dark m-1' to={`/viewproduct/${user.id}/`}><i class="fa fa-eye" aria-hidden="true"></i></Link>
//               <Link className='btn btn-dark m-1' to={`/editProduct/${user.id}/`}><i class="fa fa-pencil" aria-hidden="true"></i></Link>
//               <Link className='btn btn-danger m-1' onClick={() => {deleteUser(user.id)}}><i class="fa fa-trash" aria-hidden="true"></i></Link>
//             </td>
//           </tr>
//         ))}
//         </tbody>
//       </table>
//     </div>
//   )
// };

// export default ProductList;