// import './LogInModal.css';
// import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
// import { checkAuthenticated, login, load_user } from '../../actions/loginActions';
// import {  Navigate } from 'react-router-dom';

// const LogInModal = ({ login, onClose, isAuthenticated }) => {

//     const handleClose = () => {
//         if (onClose) {
//             onClose();
//         }
//     };

//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//     });

//     const { email, password } = formData;

//     const onChange = (e) =>
//         setFormData({ ...formData, [e.target.name]: e.target.value });

//     const onSubmit = (e) => {
//         e.preventDefault();

//         login(email, password);
//     };

//     // const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

//     // Redirect to dashboard if authenticated
//     if (isAuthenticated) {
//        return <Navigate to="/dashboard" />
//     }

//     return (
//         <div className='modalWrapper'>
//             <div className='modalContent'>
//                 <div className='siginContent'>
//                     <button className='closeBtn' onClick={handleClose}>
//                         X
//                     </button>
//                     <h2 className='loginTitle'>Login to Your Account</h2>
//                     <form className='loginForm' onSubmit={onSubmit}>
//                         <label className='email'>
//                             <input
//                                 className='userInput' 
//                                 type='email'
//                                 placeholder='email'
//                                 value={email}
//                                 name='email'
//                                 onChange={onChange}
//                                 required
//                             />
//                         </label>

//                         <label className='password'>
//                             <input
//                                 className='userInput'
//                                 type='password'
//                                 placeholder='password'
//                                 value={password}
//                                 name='password'
//                                 onChange={onChange}
//                                 minLength='6'
//                                 required
//                             />
//                         </label>
//                         <button className='signinBtn' type='submit' value='Submit'>
//                             Sign In
//                         </button>
//                         <p>
//                             Don't have an account?
//                             {/* <SignUp className='signUpLink' onClick={handleClose} /> */}
//                             {/* <Link to='/register' onClick={handleClose}>
//                 Register
//               </Link> */}
//                         </p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const mapStateToProps = (state) => ({
//     isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps,  { login, })(LogInModal);