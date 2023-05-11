import React from 'react'
import { useState } from 'react'
import SignUpModal from './SignUpModal'
import { Link } from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {
    const [showSignupModal, setshowSignupModal] = useState(false)  

    const handleModalClose = () => {
        setshowSignupModal(false)
    }

    return (
                <div className='signupWrapper'>
                    <Link className='signupLink' onClick={() => setshowSignupModal(true)}>Signup</Link>
                    {showSignupModal && <SignUpModal onClose={handleModalClose} />}
                </div>
    )
}

export default SignUp
