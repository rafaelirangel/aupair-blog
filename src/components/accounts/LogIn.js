import { useState } from 'react';
import { Link, useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import LogInModal from './LogInModal';
import './LogIn.css'
import { Container, Button, Row, Col, Form, FormControl } from "react-bootstrap";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {login} from '../../actions/auth'


const LogIn = ({login}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(location.search === '/login');

  // When the modal is closed, the showModal state is set to false,
  // and the URL's search is set to an empty string
  const handleModalClose = () => {
    setShowModal(false);
    navigate({ search: '' });
  };

  //This navigates to the desired URL when the button is clicked and when the modal is closed.
  const handleButtonClick = () => {
    setShowModal(true);
    navigate({ search: '/login' });
  };

  return (
    <div className='login-wrapper'>
      <button className='loginLink' onClick={handleButtonClick}>LogIn</button>      
        {showModal && <LogInModal onClose={handleModalClose} /> }
    </div>
  );
};

export default LogIn


// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { login } from '../../actions/loginActions';
// import { Link, useLocation } from 'react-router-dom';

// const Login = ({ login }) => {


// const [formData, setFormData] = useState({
//   email: '',
//   password: ''
// });

// const { email, password } = formData

// const onChange = e => setFormData({...formData, [e.target.name]: e.target.value })

// const onSubmit = e => {
//   e.preventDefault()

//   login(email, password);
// }

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={e => onSubmit(e)}>
//         <div>
//           <label>Email:</label>
//           <input
//            type="email"
//            placeholder='email'
//           value={email}
//           name='email'
//           onChange={e => onChange(e)}
//           required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             placeholder='password'
//             value={password}
//             name='password'
//             onChange={e => onChange(e)}
//             minLength='6'
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// // // connect action and store to the component
// // Login.propTypes = {
// //   login: PropTypes.func.isRequired,
// //   auth: PropTypes.object.isRequired
// // };

// const mapStateToProps = state => ({
//   auth: state.auth
// })

// export default connect(null, { login })(Login);