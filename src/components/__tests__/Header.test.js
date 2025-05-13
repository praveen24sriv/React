import Header from "../Header";
import { render, screen } from "@testing-library/react";

test ("Logo should load on rendering header", () => {

    const header = render(<Header/>);

    const logo = screen.getByAltText(/logo/i);
})