import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const ViewProduct = () => {

    const [user, setUser] = useState({
        pid: "",
        product_name: "",
        price: "",
        description: ""

    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () => {
        const result = await axios.get(`https://640ad0ca81d8a32198d137f0.mockapi.io/productList/${id}/`, user);
        setUser(result.data);
    }

    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/productList">
                Back To Home
            </Link>
            <h1 className="display-4">Repair ID : {id}</h1><hr />
            <ul className="list-group w-50">
                <li className="list-group-item">Repair Name : {user.pid}</li>
                <li className="list-group-item">Repair Email : {user.product_name}</li>
                <li className="list-group-item">Repair Contact No. : {user.price}</li>
                <li className="list-group-item">Repair Type Of Repairs : {user.description}</li>
            </ul>
        </div>
    )
}
export default ViewProduct;