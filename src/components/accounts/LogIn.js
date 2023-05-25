//LOGIN USING MODAL

// const LogIn = (props) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [showModal, setShowModal] = useState(location.search === '/login');

//   // When the modal is closed, the showModal state is set to false,
//   // and the URL's search is set to an empty string
//   const handleModalClose = () => {
//     setShowModal(false);
//     navigate({ search: '' });
//   };

//   //This navigates to the desired URL when the button is clicked and when the modal is closed.
//   const handleButtonClick = () => {
//     setShowModal(true);
//     navigate({ search: '/login' });
//   };

//   return (
//     <div className='login-wrapper'>
//       <button className='loginLink' onClick={handleButtonClick}>LogIn</button>      
//         {showModal && <LogInModal onClose={handleModalClose} /> }
//     </div>
//   );
// };

// export default(LogIn)


// import './LogInModal.css';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const LogIn = ({ login, isAuthenticated }) => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  // Redirect to dashboard if authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />
  }

  return (
    <div className='container mt-5'>
      <h1>Login to Your Account</h1>
      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          {/* Email */}
          <input
            className='form-control mb-3'
            type='email'
            placeholder='Email*'
            value={email}
            name='email'
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group mb-3'>
          {/* Password */}
          <input
            className='form-control'
            type='password'
            placeholder='Password*'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            minLength='6'
            required
          />
        </div>

        {/* SignIn btn */}
        <button className='btn btn-primary' type='submit'> Sign In</button>
      </form>

      <p className='mt-4'>
        Don't have an account?
        <Link to='/signup'>
          Register
        </Link>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login, })(LogIn);
