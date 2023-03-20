import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";

const EditProduct = () => {

  const navigate = useHistory();
  const { id } = useParams();

  const [user, setUser] = useState({
    pid:"",
    product_name: "",
    price:"",
    description:""
  });

  const { pid, product_name,price ,description } = user;

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://640ad0ca81d8a32198d137f0.mockapi.io/productList/${id}/`, user);
    alert("WellDone! Dude You are Edit SuccessFully Data")
    navigate("/repair");
}

const loadUser = async () => {
  const result = await axios.get(`https://640ad0ca81d8a32198d137f0.mockapi.io/productList/${id}/`);
  setUser(result.data);
}

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Repair Edit User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
           
        <div className="form-group mt-1 mb-1">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter pid"
              name="pid"
              value={pid}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group mt-1 mb-1">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter product Name"
              name="product_name"
              value={product_name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter price"
              name="price"
              value={price}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-1 mb-1">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter product description"
              name="description"
              value={description}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          

          <button className="btn btn-primary btn-block">Edit product</button>
          <Link to="/productList" className="btn btn-primary btn-block">Cancel</Link>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;