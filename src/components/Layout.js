import { Link, Outlet } from "react-router-dom";
import "./Layout.css"
import LogIn from "./LogIn.js";
import SignUp from "./SignUp";
import LanguageIcon from '@mui/icons-material/Language';


const Layout = () => {

    return (
        <div className='layoutWrapper'>
            <div className='headerWrapper'>
                <nav className='header'>

                    <div className='headerLeft'>
                        <Link className='logoLink' to='/'>Logo go back to home page</Link>
                    </div>

                    <div className='headerCenter'>
                        <Link className='homeLink' to='/'>Home</Link>
                        <Link className='aboutLink' to='/about'>About Us</Link>
                        <Link className='agenciesLink' to='/aupairProgram'>Au Pair Program</Link>
                        <Link className='contactLink' to='/contact'>Contact</Link>
                    </div>

                    <div className='headerRight'>  
                        <LogIn className='logInLink'/>
                        <SignUp className='signUpLink' />
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