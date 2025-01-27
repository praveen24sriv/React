import { useEffect } from "react";
import Shimmer from "./Shimmer";


const RestaurantMenu =()=>{

    const[ResInfo, setResInfo] = useState(null);
    
    useEffect(() => {
        fetchMenu();
        
    },[]);

    const fetchMenu = async ()=>{
        const res = await fetch("");
        const data = await res.json();
        console.log(data);
        setResInfo(data.data);
    }


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