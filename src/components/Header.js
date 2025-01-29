import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus  from "../utils/useOnlineStatus";

const Header = ()=>{
    
    const [btnName, setBtn] = useState("Login"); 
    const onlineStatus = useOnlineStatus();
    

    return(<div className="header">
        <div className="logo-container">
            <img className="logo-container" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
             <ul>
                <li> Online Status :{onlineStatus?"🟢":"🔴"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li> 
                <li>Cart</li>
                <button className="login-btn" onClick={()=>{
                    btnName=="Login"?setBtn("Logout"):setBtn("Login");
                }}>{btnName}</button>
             </ul>
        </div>
 
    </div>)
};
export default Header;
