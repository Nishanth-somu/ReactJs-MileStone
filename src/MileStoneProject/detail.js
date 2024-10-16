import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Detail()
{
    
    var {id} = useParams()
    const [fetchproduct,setFetchproduct] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/"+id)
            .then(response => response.json())
            .then(data => setFetchproduct(data))
    })

    return (
         <div className="bg-dark p-5">
        <div className="container-fluid row bg-secondary p-5">
        <div className="col-lg-6">
            <img src={fetchproduct.image} className='container-fluid dispimg'/>
        </div>
        <div className="col-lg-6  text-white">

        <h3>{fetchproduct.id}</h3>
            <h3>{fetchproduct.title}</h3>
            <h5>{fetchproduct.description}</h5>
            <h5>{fetchproduct.category}</h5>
            <h5>{fetchproduct.price}</h5>      
        </div>
       </div>
       </div>
    );
}