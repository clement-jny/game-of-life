import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div>
            <h1>Page not found</h1>
            <h3>You'll be redirected to the homepage in a few seconds</h3>
            <h3>Click the link to be redirected!</h3>

            <Link to={`/`}>Home</Link>
        </div>
    );
};