import { Link, Outlet, useLocation } from "react-router-dom";
import "./Layout.css"
import LogIn from "./accounts/LogIn.js";
import SignUp from "./accounts/SignUp";
import LanguageIcon from '@mui/icons-material/Language';
import logo from '../img/Example-logo.png'
import { useState } from "react";


const Layout = () => {
    const { pathname } = useLocation();

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

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
                            <li className="navItem">
                                {pathname === '/blog' && (
                                    <LogIn className='logInLink' />
                                )}
                            </li>

                            <li className="navItem">
                                {pathname === '/blog' && (
                                    <SignUp className='signUpLink' />
                                )}
                            </li>
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

export default Layout