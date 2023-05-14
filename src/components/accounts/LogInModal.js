import React from 'react'
import './LogInModal.css'
import SignUp from './SignUp';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LogInModal = (props) => {
    const handleClose = () => {
        if (props.onClose) {
            props.onClose();
        }
    }

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    })

    const { username, password } = loginData

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('login')
        // if (password !== password2) {
        //     return alert('Passwords do not match');
        // } else {
        //     newUser = {
        //         username,
        //         email,
        //         password,
        //     };
        //     register(newUser)
        // }
    }

    const onChange = (e) => 
        setLoginData({...loginData,[e.target.name]: e.target.value});


    return (
        <div className='modalWrapper'>
            <div className='modalContent'>
                <div className='siginContent'>
                    <button className='closeBtn' onClick={handleClose}>X</button>
                    <h2 className='loginTitle'>Login to Your Account</h2>
                    <form className='loginForm' onSubmit={onSubmit}>
                        <label className='email'>
                            {/* User Name:  */}
                            <input 
                            className='userInput' 
                            type='text' 
                            placeholder='Enter your user name' 
                            name='username'
                            onChange={onChange}
                            value={username} 
                            />
                        </label>

                        <label className='password'>
                            {/* Password: */}
                            <input 
                            className='userInput' 
                            type='text' 
                            placeholder='Enter your password' 
                            password='password' 
                            name='password'
                            onChange={onChange}
                            value={password} />
                        </label>
                        <button className='signinBtn' type='submit' value='Submit'>Sign In</button>

                        <p>Don't have an account?
                            <SignUp className='signUpLink' onClick={handleClose} />
{/* 
                            <Link to='/register' onClick={handleClose}>
                                Register
                            </Link> */}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogInModal
