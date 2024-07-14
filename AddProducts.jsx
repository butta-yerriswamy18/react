import axios from "axios";
import { useState } from "react";
import "../style/addProducts.css"

const AddProducts = () => {
    let [name, setName] = useState("")
    let [brand, setBrand] = useState("")
    let [category, setCategory] = useState("")
    let [description,setDescription]=useState("")
    let [image_url,setImageurl]= useState("")
    let [cost, setCost] = useState("")
    

    let merchant = JSON.parse(localStorage.getItem("currentMerchant"))

    let data = {name, brand, category, description, image_url, cost}

    let adddata= (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8080/products/${merchant.id}`,data)

        .then((res)=>{  
            console.log(res);
            alert("Data Added Successfully")
        })
        .catch((err)=>{
            console.log(err);
            alert("Invalid data Format")
        })
    }
    return ( 
        <div className="addproduct">
            <form action="">
                <label htmlFor="">
                    Name : <input type="text" value={name} onChange={(e)=>{
                        setName(e.target.value)
                    }} name="" id=""  placeholder="Enter the Product Name"/>
                </label>
                <br />
                <label htmlFor="">
                    Brand : <input value={brand} onChange={(e)=>{setBrand(e.target.value)}} type="text" placeholder="Enter the Product Brand"/>
                </label>
                <br />
                <label htmlFor="">
                    Category : <input value={category} onChange={(e)=>{setCategory(e.target.value)}} type="text" placeholder="Enter the Product category"/>
                </label>
                <br />
                <label htmlFor="">
                    Description : <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Enter the Product description"/>
                </label>
                <br />
                <label htmlFor="">
                    Image-url : <input type="text" value={image_url} onChange={(e)=>{setImageurl(e.target.value)}} placeholder="Enter the Product inage url"/>
                </label>
                <br />
                <label htmlFor="">
                    Price : <input type="text" value={cost} onChange={(e)=>{setCost(e.target.value)}} placeholder="Enter the Product price"/>
                </label>
                <br />
                <button onClick={adddata}>Add Product</button>
            </form>
        </div>
     );
}
export default AddProducts;