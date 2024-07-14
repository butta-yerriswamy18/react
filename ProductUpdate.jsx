import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/productUpdate.css"
const ProductUpdate = () => {
    let [name,setName]=useState("")
    let [brand,setBrand]=useState("")
    let [category,setCategory]=useState("")
    let [image_url,setImageurl]=useState("")
    let [cost,setCost]=useState("")
    let [description,setDescription]=useState("")

    let param=useParams()
    let id=param.id
    let data={id, name, brand, category, image_url, cost, description}

    let putData=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8080/products`,data)
        .then((res)=>{
            console.log(res);
            alert("Data updated successfully")
        })
        .catch((err)=>{
            console.log(err);
            alert("Invalid data format")
        })
    }
    
    
    
    useEffect(()=>{
        axios.get(`http://localhost:8080/products/${param.id}`)
        .then((res)=>{
            console.log(res.data);
            setName(res.data.data.name)
            setBrand(res.data.data.brand)
            setCategory(res.data.data.category)
            setDescription(res.data.data.description)
            setCost(res.data.data.cost)
            setImageurl(res.data.data.image_url)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return ( 
        <div className="productUpdate">
           <form onSubmit={putData} action="">
            <label htmlFor="">
             Name : <input value={name} onChange=    {(e)=>{setName(e.target.value)}}    type="text" placeholder="Enter the     name of the Product"/>
             </label>
             <br />
             <label htmlFor="">
                 Brand : <input type="text" value=   {brand} onChange={(e)=>{setBrand(e.    target.value)}} placeholder="Enter  the brand of the Product"/>
             </label>
             <br />
             <label htmlFor="">
                Category : <input type="text" value= {category} onChange={(e)=>   {setCategory(e.target.value)}}     placeholder="Enter the category of  the Product"/>
             </label>
             <br />
             <label htmlFor="">
                 Description : <input type="text"    value={description} onChange={(e)=>    {setDescription(e.target.value)}}   placeholder="Enter the Product    Description"/>
             </label>
             <br />
             <label htmlFor="">
                 Image url : <input type="text"  value={image_url} onChange={(e)=>    {setImageurl(e.target.value)}}  placeholder="Enter the Product   image url"/>
             </label>
             <br />
             <label htmlFor="">
                 Price : <input type="text" value=   {cost} onChange={(e)=>{setCost(e.  target.value)}} placeholder="Enter    the Product cost"/>
             </label>
             <br />
             <button>Update Product</button>
           </form>
        </div>
     );
}
export default ProductUpdate;