import {useRouteError} from "react-router-dom"

const Error = () => {
    const error = useRouteError();
    return (
        <div className="error">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <h3>{error.status} - {error.statusText}</h3>
        </div>
    )
}

export default Error