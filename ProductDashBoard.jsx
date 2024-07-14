import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/productDashBoard.css"
const ProductDashBoard = () => {
    let x=localStorage.getItem("currentMerchant")
    let merchant=JSON.parse(x)
    let [data,setdata]=useState([])

    let navigate=useNavigate()

    let updItem=(id)=>{
        navigate(`/merchanthomepage/updateproducts/${id}`)
    }

    let deleteProduct=(id, name)=>{
        axios.delete(`http://localhost:8080/products/${id}`)
        .then((res)=>{
            console.log(res.data);
            alert(`${name} has been deleted`)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        axios.get(`http://localhost:8080/products/by-merchant/${merchant.id}`)
        .then((res)=>{
            console.log(res);
            setdata(res.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    console.log(data);
    return ( 
        <div className="dashboard">
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
                        <button onClick={()=>{updItem(x.id)}}>Edit</button>
                        <button onClick={()=>{deleteProduct(x.id,x.name)}}>Delete</button>
                    </div>
                )
            })}
        </div>
     );
}
export default ProductDashBoard;