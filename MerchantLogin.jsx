import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "../style/merchantLogin.css"
const MerchantLogin=()=>{
    let [email,setEmail]=useState("")
    let [password, setPassword]=useState("")
    let navigate=useNavigate()

    let checkEmail=(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8080/merchants/verify-by-email?email=${email}&password=${password}`)
        .then((res)=>{
            console.log(res);
            navigate("/merchanthomepage"); 
            alert("Login was successfull");
            localStorage.setItem("currentMerchant",JSON.stringify(res.data.data))
        })

        .catch((err)=>{
            console.log(err); 
            alert("Invalid userName and Password");
        })
    }
    return(
        <div className="merchantLogin"> 
        <form action="">
            <input type="email" value={email}  onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your email"/>
            <br />
            <input type="password" value={password}  onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter your password"/>
            <br />
            <button onClick={checkEmail} >Login</button>
        </form>
        </div>
    )
}
export default MerchantLogin