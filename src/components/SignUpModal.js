import './SignUpModal.css'

const SignUpModal = (props) => {
    const handleClose = () => {
        if (props.onClose) {
            props.onClose();
        }
    }

    return (
        <div className='modalWrapper'>
            <div className='modalContent'>
                <div className='sigupContent'>
                    <button className='closeBtn' onClick={handleClose}>X</button>
                        <h1 className='signupTitle'>New Here?</h1>
                        <p className='signupText'>Create an account and share your experiences</p>
                </div>
                <form className='signupForm'>
                    <label className='email'>
                        {/* Email:  */}
                        <input className='userInput' type='text' placeholder='Enter your email' email='email' />
                    </label>

                    {/* User Name:  */}
                         <label className='userName'>
                            <input className='userInput' type='text' placeHolder='Enter your user name' name='name' />
                        </label> 

                    <label className='password'>
                        {/* Password: */}
                        <input className='userInput' type='text' placeholder='Enter your password' password='password' />
                    </label>
                    <button className='signupBtn' type='submit' value='Submit'>SIGN UP</button>
                </form>
            </div>
        </div>
    )
}

    export default SignUpModal