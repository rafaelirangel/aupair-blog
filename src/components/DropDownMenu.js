import { Link } from "react-router-dom"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import './DropDownMenu.css'

const DropDownMenu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="dropDownMenuWrapper">
            <div className='menuIcons' onClick={handleMenuClick}>
                <MenuIcon />
                <PersonOutlineIcon />
            </div>
            {showMenu && (
                <div className='dropDownMenu'>

                    {/* Add login function to onClick once it's done */}
                    <div className='login'>
                        <Link className='logInLink'>
                            LogIn
                        </Link>
                    </div>

                    <div className='logOut'>
                        <Link className='logOutLink' >
                            LogOut
                        </Link>
                    </div>

                    <div className='register'>
                        <Link className="registerLink" >
                            Register
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropDownMenu;