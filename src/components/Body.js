import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState , useEffect } from "react";
 

const Body=()=>{
    const [ListOfRestaurants ,setListOfRestaurants] = useState(resList);
    useEffect(()=>{
        fetchdata();
    },[]); 
    const fetchdata = async()=>{
        const data = await fetch("https://api.npoint.io/93bed93a99df4c91044e");
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json.body.data);
    }


    return(<div className="body">
            <div className="Filter">
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
            {ListOfRestaurants.map(resto => <RestaurantCard key={resto.info.id} resData={resto}/>)}
        </div>

    </div>)
};
export default Body;
