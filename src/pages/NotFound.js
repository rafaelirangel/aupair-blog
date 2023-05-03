import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div className="notFoundWrapper">
            <h1>Page not found</h1>
            <Link to='/'>
                <button className="notFoundBtn">
                    Go back to the main page
                </button>
            </Link>

        </div>
    )
}

export default NotFound