// import './SignUpModal.css'
// import { useState } from 'react';
// import LogIn from './LogIn'
// import { Link } from 'react-router-dom';

// const SignUpModal = (props) => {
//     const handleClose = () => {
//         if (props.onClose) {
//             props.onClose();
//         }
//     }

//     const [signupData, setSignupData] = useState({
//         username: '',
//         email: '',
//         password: '',
//         password2: ''
//     })

//     //Destructuring the props
//     const { username, email, password, password2 } = signupData

//     const onSubmit = (e) => {
//         e.preventDefault();
//         console.log('submit')
//         // if (password !== password2) {
//         //     return alert('Passwords do not match');
//         // } else {
//         //     const newUser = {
//         //         username,
//         //         email,
//         //         password,
//         //     };
//         //     register(newUser)
//         // }
//     }

//     const onChange = (e) =>
//         setSignupData({ ...signupData, [e.target.name]: e.target.value });


//     return (
//         <div className='modalWrapper'>
//             <div className='modalContent'>
//                 <div className='sigupContent'>
//                     <button className='closeBtn' onClick={handleClose}>X</button>
//                     <h1 className='signupTitle'>New Here?</h1>
//                     <p className='signupText'>Create an account and share your experiences</p>
//                 </div>
//                 <form className='signupForm' onSubmit={onSubmit}>

//                     {/* User Name:  */}
//                     <label className='userName'>
//                         <input
//                             className='userInput'
//                             type='text'
//                             placeholder='Enter your user name'
//                             name='username'
//                             onChange={onChange}
//                             value={username}
//                         />
//                     </label>

//                     {/* Email:  */}
//                     <label className='email'>
//                         <input className='userInput'
//                             type='text'
//                             placeholder='Enter your email'
//                             name='email'
//                             onChange={onChange}
//                             value={email}
//                         />
//                     </label>

//                     {/* Password: */}
//                     <label className='password'>
//                         <input
//                             className='userInput'
//                             type='text'
//                             placeholder='Enter your password'
//                             name='password'
//                             onChange={onChange}
//                             value={password}
//                         />
//                     </label>

//                     {/* Password: */}
//                     <label className='password'>
//                         <input
//                             className='userInput'
//                             type='text'
//                             placeholder='repeat your password'
//                             name='password2'
//                             onChange={onChange}
//                             value={password2}
//                         />
//                     </label>
//                     <button className='signupBtn' type='submit' value='Submit'>SIGN UP</button>
//                     <p>
//                         Already have an account?
//                         <LogIn className='logInLink' onClick={handleClose} />
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