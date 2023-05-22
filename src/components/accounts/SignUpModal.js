// import './SignUpModal.css'
// import LogIn from './LogIn'
// import { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate, Routes, Route } from 'react-router-dom';
// // import SignUpModal from './SignUpModal.js'
// import './SignUp.css'
// import { Container, Button, Row, Col, Form, FormControl } from "react-bootstrap";
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { signupNewUser } from '../../actions/auth.js';

// const SignUpModal = ({ signupNewUser, onClose }) => {

//     useEffect(() => {
//         signupNewUser();
//     }, [signupNewUser]);


//     const handleClose = () => {
//         if (onClose) {
//             onClose();
//         }
//     }

//     const [signupData, setSignupData] = useState({ username: "", password: "" })
//     const { username, password } = signupData;

//     const onChange = (e) => {
//         setSignupData({ ...signupData, [e.target.name]: e.target.value });
//     }

//     const onSignupClick = (e) => {
//         e.preventDefault()
//         const userData = {
//             username: username,
//             password: password
//         }
//         signupNewUser(userData)
//         console.log('Sign up' + username + ' ' + password);
//     }

//     return (
//         <div className='modalWrapper'>
//             <div className='modalContent'>
//                 <div className='sigupContent'>
//                     <button className='closeBtn' onClick={handleClose}>X</button>
//                     <h1 className='signupTitle'>New Here?</h1>
//                     <p className='signupText'>Create an account and share your experiences</p>
//                 </div>
//                 <form className='signupForm' onClick={onSignupClick}>

//                     {/* User Name:  */}
//                     <label className='userName'>
//                         <input
//                             className='userInput'
//                             type="text"
//                             name="username"
//                             placeholder="Enter user name"
//                             value={username}
//                             onChange={onChange}
//                         />
//                     </label>

//                     {/* Email: 
//                     <label className='email'>
//                         <input className='userInput'
//                             type='text'
//                             placeholder='Enter your email'
//                             name='email'
//                             onChange={onChange}
//                             value={email}
//                         />
//                     </label> */}

//                     {/* Password: */}
//                     <label className='password'>
//                         <input
//                             className='userInput'
//                             type="password"
//                             name="password"
//                             placeholder="Enter password"
//                             value={password}
//                             onChange={onChange}
//                         />
//                     </label>

//                     {/* Password:
//                     <label className='password'>
//                         <input
//                             className='userInput'
//                             type='text'
//                             placeholder='repeat your password'
//                             name='password2'
//                             onChange={onChange}
//                             value={password2}
//                         />
//                     </label> */}
//                     <button className='signupBtn' type='submit' value='Submit'>SIGN UP</button>
//                     <p>
//                         Already have an account?
//                         <Link to="/login" onClick={handleClose}>Login</Link>
//                         {/* <LogIn className='logInLink' onClick={handleClose} /> */}
//                         {/* <Link to='/login' onClick={handleClose}>
//                             login
//                         </Link> */}
//                         {/* <LogIn to='/login'/> */}
//                     </p>

//                 </form>
//             </div>
//         </div>
//     )
// }

// export default SignUpModal