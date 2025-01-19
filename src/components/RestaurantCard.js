import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
    const {resData} = props

    const {cloudinaryImageId,name,cuisines,avgRating}=resData?.info
    const {deliveryTime}=resData?.info.sla
 
    return(<div className="card">
        <img className="res-logo" alt="res-food" src={CDN_URL+cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime} minutes </h4>
    </div>)
};
export default RestaurantCard;
