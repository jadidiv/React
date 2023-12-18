import logo from "./react-router-mark-color.png"

import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div id="error-page">
            <img src={logo} alt="react-router-mark"></img>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/">Back to home</Link>
        </div>
    );
}