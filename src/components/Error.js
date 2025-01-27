import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>404</h1>
            <h2>Page not found</h2>
            <h3>{err.statusText}</h3>
        </div>
    );
};
export default Error;