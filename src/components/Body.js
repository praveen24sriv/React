import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body=()=>{
    return(<div className="body">
         
        <div className="search">Search</div>

        <div className="Cards-cont">
            {resList.map(resto => <RestaurantCard key={resto.info.id} resData={resto}/>)}
        </div>

    </div>)
};
export default Body;