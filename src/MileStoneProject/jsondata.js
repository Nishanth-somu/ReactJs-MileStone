import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function Json()
{ 
    const [loop, setloop] = useState(0)
    const [fdetail, setfdetail] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then(det => det.json())
            .then(detail => setfdetail(detail))
    })
    const csvdata = fdetail
    return (
        <>
        <div class="d-flex justify-content-between bg-secondary">
        <h1 className="text-center"> Product Details </h1>
            <CSVLink data={csvdata}>  <button class="button-deco bg-success" > Click to Dowanload file </button> </CSVLink>
        </div>

        <div>
            
        </div>        
        <div class="bg-dark p-5" >
            <table className="table table-striped container " >    
              <thead >  
                <tr className="bottom "> 
                <th>Image</th> 
                <th>ID</th> 
                <th>Name</th>
                <th>Description</th> 
                <th>pro rate</th>
                <th>Category</th> 
                <th>ProductCount</th>
                <th>Rating </th>
                <th>USer count</th>  
                <th> Product Detail </th>
                </tr>
              </thead>   
                {
                fdetail.map((value, index) => (
                 <>
                <tbody>
                 <tr>
                <td><img src={value.image} /> </td> 
                <td>{value.id}</td> 
                <td>{value.title}</td> 
                <td> {value.description} </td> 
                <td>  <span class="price-color">{value.price} </span>  </td>
                <td>{value.category}</td> 
                <td> {value.rating.count}  </td> 
                <td> {value.rating.rate} <StarRatings rating={value.rating.rate} starDimension="12px" starSpacing="4px" starRatedColor="gold"/> </td>
                <td width="150px">  <button class="bg-dark text-white" onClick={() => { setloop(loop + 1) }}>  +</button> {loop}
                 <button class="bg-dark text-white" onClick={() => { setloop(loop - 1) }}>-</button> </td> <td > <Link to={`/product/${value.id}`} ><button class="bton bg-primary  "> View more </button> </Link> </td>
                </tr>
                </tbody>
                        </>
                    ))
                }
            </table>

        </div>
            
        </>
    );
}