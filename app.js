import React from "react";
import ReactDOM from "react-dom/client";


const heAD = (<h1 id="heading">
    yo yo yo slayed thru jsx
    </h1>);

//React functional component
const HeadingComponent = ()=>{
    return <h1 className="heading">hey func comp</h1>;
};
// same as upar wala func .
const HeadingComponent2 = ()=> (<h1 className="heading">
    hey func comp</h1>);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heAD);
 