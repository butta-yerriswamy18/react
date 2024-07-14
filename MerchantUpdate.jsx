import axios from "axios"
import "../style/merchantUpdate.css"
import { useEffect, useState } from "react"
const MerchantUpdate = () => {
    let [name,setname]=useState("")
    let [gst_no,setgst_no]=useState("")
    let [phone,setphone]=useState("")
    let [email,setemail]=useState("")
    let [password,setpassword]=useState("")

    let x=localStorage.getItem("currentMerchant")
    let merchant=JSON.parse(x)
    let id=merchant.id;
    console.log(merchant.id);
    let merchantData={id,name,phone,email,gst_no,password}

    let updateMerchant=(e)=>{
        e.preventDefault()
        axios.put('http://localhost:8080/merchants',merchantData)
        .then((res)=>{
            console.log(res);
            alert("data updated successfully")
        })
        .catch((err)=>{
            console.log(err);
            alert("Invalid Error")
        })
    }

    useEffect(()=>{
        axios.get(`http://localhost:8080/merchants/${merchant.id}`)
    .then((res)=>{
        console.log(res.data);
        setname(res.data.data.name)
        setgst_no(res.data.data.gst_no)
        setphone(res.data.data.phone)
        setemail(res.data.data.email)
        setpassword(res.data.data.password)
    })
    .catch((err)=>{
        console.log(err);
    })
    },[])
    
    return ( 
        <div className="merchantUpdate">
                <legend>Update</legend>
                <form onSubmit={updateMerchant} action="" >
                    <label htmlFor="">
                        Name : <input value={name} onChange={(e)=>{setname(e.target.value)}} type="text"  placeholder="Enter the Merchant Name"/>
                    </label>
                    <br />
                    <label htmlFor="">
                        Gst_no : <input value={gst_no} onChange={(e)=>{setgst_no(e.target.value)}} type="text" placeholder="Enter the GST Number"/>
                    </label>
                    <br />
                    <label htmlFor="">
                        Phone : <input value={phone} onChange={(e)=>{setphone(e.target.value)}}  type="text" placeholder="Enter the Phone Number"/>
                    </label>
                    <br />
                    <label htmlFor="">
                        Email : <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="text" placeholder="Enter the Merchant Email"/>
                    </label>
                    <br />
                    <label htmlFor="">
                        Password : <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type="text" placeholder="Enter the Password"/>
                    </label>
                    <br />
                    <button>Update</button>
                </form>
        </div>
     );
}
 
export default MerchantUpdate;