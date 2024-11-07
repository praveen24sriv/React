import React from "react";
import ReactDOM from "react-dom/client";


const HEA =()=>{
    return <h2>yo yo yo slayed thru jsx</h2>
};
const no = 1000;
//Component Composition
const HeadingComponent = ()=>(
    <div id="container">
         <HEA/>
         {no}
         <h1 className="heading">hey func comp</h1>
    </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
 