import Header from "../Header";
import { render, screen } from "@testing-library/react";
import {Provider } from "react-redux";
import store from "../../store";
import { StaticRouter } from "react-router-dom/server";

test ("Logo should load on rendering header", () => {

    const header = render(<StaticRouter>
    < Provider store={store}>
        <Header/>
    </Provider>
    </StaticRouter>
);

    
})