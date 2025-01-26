import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = ()=>{
    
    const [btnName, setBtn] = useState("Login"); 

    return(<div className="header">
        <div className="logo-container">
            <img className="logo-container" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
             <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login-btn" onClick={()=>{
                    setBtn("Logout")
                }}>{btnName}</button>
             </ul>
        </div>
 
    </div>)
};
export default Header;
