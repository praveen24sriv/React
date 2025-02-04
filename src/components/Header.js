import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus  from "../utils/useOnlineStatus";

const Header = ()=>{
    
    const [btnName, setBtn] = useState("Login"); 
    const onlineStatus = useOnlineStatus();
     

    return(<div className=" flex justify-around bg-pink-100 shadow-lg px-5 sm:bg-blue-100 md:bg-purple-50">
        <div className="logo-container">
            <img className="h-24 p-2" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
             <ul className="flex py-10 ">
                <li className="px-2"> Online Status :{onlineStatus?"🟢":"🔴"}</li>
                <li className="px-2"><Link to="/">Home</Link></li>
                <li className="px-2"><Link to="/about">About Us</Link></li>
                <li className="px-2"><Link to="/contact">Contact Us</Link></li> 
                <li className="px-2"><Link to="/grocery">Grocery</Link></li>
                <li className="px-2">Cart</li>
                <button className="login-btn" onClick={()=>{
                    btnName=="Login"?setBtn("Logout"):setBtn("Login");
                }}>{btnName}</button>
             </ul>
        </div>
 
    </div>)
};
export default Header;
