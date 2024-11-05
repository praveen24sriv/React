import React from "react";
import ReactDOM from "react-dom/client";
const parent= React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",
        {id:"child"},
        [React.createElement("h1",
            {id:"head"},
            "nesting hori h bhyi tagdi"
        ),React.createElement("h2",
            {id:"head"},
            "nesting hori h bhyi tagdi hmmm"
        )]))
            
const root = ReactDOM.createRoot(document.getElementById("root"));
//to make sibling create an array in third argument of createElement


root.render(parent);
