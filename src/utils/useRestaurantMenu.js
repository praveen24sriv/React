 import { useEffect, useState } from 'react';   
 const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
     useEffect(()=>{
        fetchData();
     },[]);
    const fetchData = async ()=>{
        const data = await fetch(`http://localhost:3001/api/restaurants/${resId}`);
        const json = await data.json();
        setResInfo(json.data);

    };
    return resInfo;
     

 };
 export default useRestaurantMenu;