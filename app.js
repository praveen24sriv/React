import React from "react";

import ReactDOM from "react-dom/client";

const Header = ()=>{
    return(<div className="header">
        <div className="logo-container">
            <img className="logo-container" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS93sZcYTfKGawuUNV3sF86AbPu5AWnVWu8ZQ&s"></img>
        </div>
        <div className="nav-items">
             <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
             </ul>
        </div>
 
    </div>)
};

const RestaurantCard=(props)=>{
    return(<div className="card">
        <img className="res-logo" alt="res-food" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/l5sjr78yn3vhopcvqgfb"></img>
        <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4>
        <h4>{props.rating}</h4>
        <h4>{props.time} </h4>
    </div>)
};

const Body=()=>{
    return(<div className="body">
         
        <div className="search">Search</div>

        <div className="Cards-cont">
            <RestaurantCard resName="Meghana foods" cuisine="indian, biryani , non-veg" rating="4.3 stars" time="38 mins"/>
            <RestaurantCard resName="KFC" cuisine="burger, Fries , non-veg" rating="4.1 stars" time="45 mins"/>
        </div>

    </div>)
};

const AppLayout = ()=>{
     return (<div className="app ">
        <Header/>
        <Body/>

     </div>)
 };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

