import React from 'react'
import './LogInModal.css'
import SignUp from './SignUp';

const LogInModal = (props) => {
    const handleClose = () => {
        if (props.onClose) {
            props.onClose();
        }
    }

    return (
        <div className='modalWrapper'>
            <div className='modalContent'>
                <div className='siginContent'>
                    <button className='closeBtn' onClick={handleClose}>X</button>

                    <h2 className='loginTitle'>Login to Your Account</h2>
                    <form className='loginForm'>
                        <label className='email'>
                            {/* Email:  */}
                            <input className='userInput' type='text' placeholder='Enter your email' email='email' />
                        </label>

                        <label className='password'>
                            {/* Password: */}
                            <input className='userInput' type='text' placeholder='Enter your password' password='password' />
                        </label>
                        <button className='signinBtn' type='submit' value='Submit'>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogInModal
