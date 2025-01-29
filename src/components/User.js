import { useEffect } from "react";

const User =(props)=>{

    useEffect(()=>{
        console.log(props.name+"Child Component Did Mount");

        return ()=>{
            console.log(props.name+"Child Component Will Unmount");
        }
    },[]);
    


    return <div className="user-card">
         <h2>Name: {props.name}
         </h2>
         <h3> Location : Bangalore

         </h3>
         <h4> Contact : praveen24sriv</h4>


    </div>

};
export default User; 