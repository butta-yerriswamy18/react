import { useState } from "react";
import axios from "axios";
import "../style/productByCategory.css"
const ProductByCategory = () => {
    let [category,setcategory]=useState("")
    let [data,setdata]=useState([])

    let searchCategory=(e)=>{
        e.preventDefault()
        axios.get(`http://localhost:8080/products/by-category/${category}`)
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
        <div className="productByCategory">
            <form  action="">
                <input value={category} onChange={(e)=>{setcategory(e.target.value)}} type="text" placeholder="Enter the Category"/>
                <button onClick={searchCategory}>Search</button>
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
 
export default ProductByCategory;