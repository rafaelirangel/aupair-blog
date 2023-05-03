import { Link, Outlet } from "react-router-dom";
import "./Layout.css"

const Layout = () => {

    return (
        <div className="layoutWrapper">
            <nav className="header">
                <Link className="logoLink" to="/">
                    <h1>
                        Logo go back to home page
                    </h1>
                </Link>

                <Outlet />

                
            </nav>

        </div>

    )
}

export default Layout