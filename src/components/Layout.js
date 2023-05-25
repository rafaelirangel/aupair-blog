import { Link, Outlet, useLocation, Navigate } from "react-router-dom";
import "./Layout.css"
import LanguageIcon from '@mui/icons-material/Language';
import logo from '../img/Example-logo.png'
import { useState } from "react";
import { logout } from '../actions/authActions.js'
import { connect } from "react-redux";
import { Fragment } from 'react'


const Layout = ({ logout, isAuthenticated }) => {

    const authLinks = () => (
        <li className='nav-item'>
            <Link to='/' className='authBtn' onClick={logout}>Logout</Link>
        </li>
    )

    const guestLinks = () => {
        if (pathname === "/blog" || pathname === "/login" || pathname === "/signup") {
            return (
                <Fragment>
                    <li className='nav-item'>
                        <Link to='/login' className='authBtn'>LogIn</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/signup' className='authBtn'>SignUp</Link>
                    </li>
                </Fragment>
            );
        } else {
            return null;
        }
    }

    // determine the current URL path and perform conditional rendering or other logic based on the path.
    const { pathname } = useLocation();

    //handling responsive hamburger menu
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    //Close the responsive nav bar when a link is clicked
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <div className='layoutWrapper'>
            <div className='headerWrapper'>
                <nav className="navbar">
                    <div className="navMenuContainer">
                        <Link className="logoLink" to="/">
                            <img className="logoImg" src={logo} alt="Logo" />
                        </Link>

                        <ul className={`navMenu ${menuOpen ? 'active' : ''}`}>
                            <li className="navItem">
                                <Link className="homeLink" to="/" onClick={handleLinkClick}>
                                    Blog
                                </Link>
                            </li>
                            <li className="navItem">
                                <Link className="aboutLink" to="/about" onClick={handleLinkClick}>
                                    About Us
                                </Link>
                            </li>
                            <li className="navItem">
                                <Link className="programLink" to="/aupairProgram" onClick={handleLinkClick}>
                                    Au Pair Program
                                </Link>
                            </li>
                            <li className="navItem">
                                <Link className="contactLink" to="/contact" onClick={handleLinkClick}>
                                    Contact
                                </Link>
                            </li>

                            {isAuthenticated ? authLinks() : guestLinks()}

                        </ul>
                    </div>

                    <div className={`hamburgerMenu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>
            </div>

            <Outlet />

            <div className="footer">
                <div className="footerLeft">
                    <p>© 2023 AuPair Blog</p>
                    <p> · Terms · Privacy · Your Privacy Choices </p>
                </div>

                <div className="footerRight">
                    <LanguageIcon />
                    <p> English (US) </p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(Layout)