import axios from "axios";
import { useEffect, useState } from "react";

const ViewProduct = () => {
    // let x=localStorage.getItem("currentMerchant")
    // let merchant=JSON.parse(x)
    let [data,setdata]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:8080/products/findAll`)
        .then((res)=>{
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    })
    return ( 
        <div className="viewProduct">
            {data.map((x)=>{
                return(
                    <div className="productslist">
                        <div className="im_age">
                        <span id="category">{x.category}</span>
                           <h1>{x.image_url}</h1>
                        </div>
                        <div className="details">
                        <p>{x.name} <span>{x.brand}</span></p>
                        <span>MRP : <strike>{x.cost}</strike></span>
                        <br />
                        <span><big>Discount Price : <big><big><b>{x.cost-x.cost*0.5}</b></big></big></big></span>
                        <br />
                        <span>Description : <i>{x.description}</i></span>
                        </div>
                        {/* <button onClick={()=>{updItem(x.id)}}>Edit</button>
                        <button onClick={()=>{deleteProduct(x.id,x.name)}}>Delete</button> */}
                    </div>
                )
            })}
        </div>
     );
}
 
export default ViewProduct;