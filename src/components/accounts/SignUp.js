import { useState } from 'react';
import { Link, useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import SignUpModal from './SignUpModal.js'
import './SignUp.css'

const SignUp = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [showSignupModal, setshowSignupModal] = useState(location.search === 'signup');

    // When the modal is closed, the showModal state is set to false,
    // and the URL's search is set to an empty string
    const handleModalClose = () => {
        setshowSignupModal(false);
        navigate({ search: '' });
    };

    //This navigates to the desired URL when the button is clicked and when the modal is closed.
    const handleButtonClick = () => {
        setshowSignupModal(true);
        navigate({ search: '/signup' });
    };

    return (
        <div className='login-wrapper'>
            <button className='loginLink' onClick={handleButtonClick}>SignUp</button>
            {showSignupModal && <SignUpModal onClose={handleModalClose} />}
        </div>
    );
};

export default SignUp;

