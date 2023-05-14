import { Link, Outlet, useLocation } from "react-router-dom";
import "./Layout.css"
import LogIn from "./accounts/LogIn.js";
import SignUp from "./accounts/SignUp";
import LanguageIcon from '@mui/icons-material/Language';


const Layout = () => {
    const { pathname } = useLocation();

    return (
        <div className='layoutWrapper'>
            <div className='headerWrapper'>
                <nav className='header'>

                    <div className='headerLeft'>
                        <Link className='logoLink' to='/'>Logo go back to home page</Link>
                    </div>

                    <div className='headerCenter'>
                        <Link className='homeLink' to='/'>Blog</Link>
                        <Link className='aboutLink' to='/about'>About Us</Link>
                        <Link className='agenciesLink' to='/aupairProgram'>Au Pair Program</Link>
                        <Link className='contactLink' to='/contact'>Contact</Link>
                    </div>

                    {pathname === '/blog' && (
                        <div className='headerRight'>
                            <LogIn className='logInLink' />
                            <SignUp className='signUpLink' />
                        </div>
                    )}
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