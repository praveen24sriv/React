import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";


const RestaurantMenu =()=>{ 

    

    const {resId} = useParams();

    const ResInfo = useRestaurantMenu(resId);
    
    // useEffect(() => {
    //     fetchMenu();
        
    // },[]);

    // const fetchMenu = async ()=>{
    //     const res = await fetch(`http://localhost:3001/api/restaurants/${resId}`);
    //     const data = await res.json();
    //     console.log(data);
    //     setResInfo(data.data);
    // }

 
    return (ResInfo === null)? (<Shimmer/>

    ):( 

        <div className="Menu">
            <h1>{ResInfo.data.name}</h1>
            <h2>Menu</h2>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    ); 
};
export default RestaurantMenu;
