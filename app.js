// const heading =React.createElement(
//     "h1",
//     {id:"heading"},
//     "hello react"
// );

const parent= React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",
        {id:"child"},
        React.createElement("h1",
            {id:"head"},
            "nesting hori h bhyi tagdi"
        )))
            
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);
