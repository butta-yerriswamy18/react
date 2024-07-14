import React, { useState } from "react"
import "../style/merchantSignUp.css"
import axios from "axios"
const MerchantSignUp=()=>{
    let [name,setname]=useState("")
    let [gst_no,setgst_no]=useState("")
    let [phone,setphone]=useState("")
    let [email,setemail]=useState("")
    let [password,setpassword]=useState("")
    let data={name,gst_no,phone,email,password}
    let signUp=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/merchants",data)
        .then((res)=>{
            console.log(res);
            alert("Data Added successfully")
        })
        .catch((err)=>{
            alert("404 Error")
            console.log(err);
        })
    }
    return(
        <div className="merchantsignup">
                <legend>Sign Up</legend>
                <form onSubmit={signUp} action="" >
                    <label htmlFor="">
                        Name : <input value={name} onChange={(e)=>{setname(e.target.value)}} type="text"  placeholder="Enter the User Name"/>
                    </label>
                    <br />
                    <br />
                    <label htmlFor="">
                        Gst_no : <input value={gst_no} onChange={(e)=>{setgst_no(e.target.value)}} type="text" placeholder="Enter the GST Number"/>
                    </label>
                    <br />
                    <br />
                    <label htmlFor="">
                        Phone : <input value={phone} onChange={(e)=>{setphone(e.target.value)}} type="text" placeholder="Enter the Phone Number"/>
                    </label>
                    <br />
                    <br />
                    <label htmlFor="">
                        Email : <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="text" placeholder="Enter the User Email"/>
                    </label>
                    <br />
                    <br />
                    <label htmlFor="">
                        Password : <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type="text" placeholder="Enter the Password"/>
                    </label>
                    <br />
                    <button>Sign Up</button>
                </form>
        </div>
    )
}
export default MerchantSignUp