import React from 'react'
import './LogInModal.css'

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
                    <h2 className='loginTitle'>Login to Your Account</h2>
                    <form className='loginForm'>
                        <label className='email'>
                            {/* Email:  */}
                            <input className='userInput' type='text' placeHolder='Enter your email' email='email' />
                        </label>

                        <label className='loginName'>
                            {/* User Name:  */}
                            <input className='userInput' type='text' placeHolder='Enter your user name' name='name' />
                        </label>

                        <label className='password'>
                            {/* Password: */}
                            <input className='userInput' type='text' placeHolder='Enter your password' password='password' />
                        </label>
                        <button className='signinBtn' type='submit' value='Submit'>Sign In</button>
                    </form>
                </div>

                <div className='signupWrapper'>
                    <button className='closeBtn' onClick={handleClose}>X</button>

                    <div className='signupContent'>
                        <h1 className='signupTitle'>New Here?</h1>
                        <p className='signupText'>Sign up and share your experiences</p>
                        <button className='signupBtn' type='submit' value='Submit'>Sign Up</button>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default LogInModal
