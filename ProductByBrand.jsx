import { useState } from "react";
import "../style/productByBrand.css"
import axios from "axios";
const ProductByBrand = () => {
    let [brand,setBrand]=useState("")
    let [data,setdata]=useState([])

    let searchBrand=(e)=>{
        e.preventDefault()
        axios.get(`http://localhost:8080/products/by-brand/${brand}`)
        .then((res)=>{
            console.log(res);
            setdata(res.data.data)
            // alert("Brand Found")
        })
        .catch((err)=>{
            console.log(err);
            // alert("Brand Not Found")
        })
    }
    return ( 
        <div className="productByBrand">
            <form  action="">
                <input value={brand} onChange={(e)=>{setBrand(e.target.value)}} type="text" placeholder="Enter the Brand"/>
                <button onClick={searchBrand}>Search</button>
            </form>
            <div className="products">
                {data.map((x)=>{
                    return(
                        <div className="display">
                            <div className="image">
                            <img src={x.image_url} alt="**Image**" />
                            </div>
                            <div className="details">
                                <h2>{x.name}</h2>
                                <br />
                                <h3>{x.brand}</h3><br />
                                <span>Price : </span> <h4>${x.cost}.<sup>00</sup></h4>
                                <br />
                                <b>Description : </b><span>{x.description}</span>
                            </div>
                        </div>
                        
                    )
                })}
            </div>
        </div>
     );
}
 
export default ProductByBrand;