import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard=(props)=>{
    const {resData} = props
    const {user} = useContext(UserContext);

    const {cloudinaryImageId,name,cuisines,avgRating}=resData?.info
    const {deliveryTime}=resData?.info.sla
 
    return(<div className="w-56 m-2 p-2 shadow-lg bg-pink-50">
        <img className="res-logo" alt="res-food" src={CDN_URL+cloudinaryImageId}></img>
        <h3 className="font-bold text-xl">{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime} minutes
        </h4>
        <h4>{user.name}</h4>
    </div>)
};
export default RestaurantCard;
  