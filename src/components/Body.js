import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

 

const Body=()=>{
    // const seachBtnCss ={
    //     backgroundColor: "blue",
    // }
    const [ListOfRestaurants ,setListOfRestaurants] = useState(resList);
    // const [FilteredRestaurants ,setFilteredRestaurants] = useState([]);
    const [SearchText, setSearchText] = useState("");
    // useEffect(()=>{
    //     fetchdata();
    // },[]); 
    // const fetchdata = async()=>{
    //     const data = await fetch("https://www.google-analytics.com/j/collect?v=1&_v=j101&a=1730037449&t=pageview&_s=1&dl=https%3A%2F%2Fwww.swiggy.com%2F&ul=en-gb&de=UTF-8&dt=Order%20Food%20%26%20Groceries.%20Discover%20the%20best%20restaurants.%20Swiggy%20it!&sd=30-bit&sr=1440x900&vp=1600x390&je=0&_u=QACAAEABAAAAACAAI~&jid=&gjid=&cid=160243765.1731004109&uid=0&tid=0&_gid=1026354939.1737838075&_slc=1&gtm=45He51n0n81MJV7Q8Qv78036788za200&gcd=13l3l3l3l1l1&dma=0&tag_exp=102067555~102067808~102081485~102123608&z=1699555837");
    //     const json = await data.json();
    //     console.log(json);
    //     setListOfRestaurants(json.body.data);
    //     setFilteredRestaurants(json.body.data);
    // }

  
    const onlineStatus = useOnlineStatus(); 
     
    if (onlineStatus==false) {
        console.log("You are offline");
        return (<div>
            <h1>Looks like you are Offline</h1>
            </div>);
    }
 

    return ListOfRestaurants.length==0?(
    <Shimmer/>

    ):(<div className="body">
            <div className="Filter">
            
            <div className="search" >
                <input type="text" className="search-box" placeholder="Search for Restaurants" value={SearchText}
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
                <button style= {{ backgroundColor:"blue"}} 
                    onClick={()=>{
                    const Search = ListOfRestaurants.filter(
                    (res)=>res.info.name.toLowerCase().includes(SearchText.toLowerCase())  
                );
                console.log(Search);
                setListOfRestaurants(Search);
                
                }}>Search</button> 
            </div>

            <button className="filter-btn" onClick={()=>{
                const filteredList = ListOfRestaurants.filter(
                    (res)=>res.info.avgRating > 4
                );
                console.log(filteredList);
                setListOfRestaurants(filteredList);
            }}>Top Rated Restaurants

            </button>
        </div>

        <div className="Cards-cont">
            {ListOfRestaurants.map(resto =><Link 
            key={resto.info.id} 
            to={"/restaurant/"+resto.info.id}>
                <RestaurantCard  resData={resto}/>
                </Link> )}
        </div>

    </div>)
};
export default Body;
