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
        <h4>4.4 stars</h4>
        <h4>38 mins </h4>
    </div>)
};

const Body=()=>{
    return(<div className="body">
         
        <div className="search">Search</div>

        <div className="Cards-cont">
            <RestaurantCard resName="Meghana foods" cuisine="indian, biryani , non-veg"/>
            <RestaurantCard resName="KFC" cuisine="burger, Fries , non-veg"/>
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
