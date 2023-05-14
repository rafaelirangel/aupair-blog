// const LogIn = () => {
//   const [showModal, setShowModal] = useState(false)

//   const handleModalClose = () => {
//     setShowModal(false)
//   }

//   return (
//     <div className='logInWrapper'>
//       <Link to='/login' className='loginLink' onClick={() => setShowModal(true)}>LogIn</Link>
//       {showModal && <LogInModal onClose={handleModalClose} />}
//     </div>
//   )
// }

// export default LogIn


import { useState } from 'react';
import { Link, useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import LogInModal from './LogInModal';
import './LogIn.css'

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(location.search === 'login');

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

export default Login;
