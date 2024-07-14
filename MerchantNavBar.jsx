import React from "react"
import { Link } from "react-router-dom";
import "../style/merchantNavbar.css"
const MerchantNavBar=()=>{
    return(
        <div className="merchantNavBar">
            <div className="logo">
                Shop<span>It</span>
            </div>
            <div className="optionns">
            <span>
                <Link to="/merchantlogin">Log in</Link></span>
            <span>
                <Link to="/merchantsignup">Sign Up</Link></span>
            <span>
                <Link to="/merchantUpdate">Update</Link>
            </span>
            <span>
                <Link to="/">Log out</Link></span>
            </div>
        </div>
    )
}
export default MerchantNavBar;