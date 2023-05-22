import { useState } from 'react';
import { Link, useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import LogInModal from './LogInModal';
import './LogIn.css'
import { Container, Button, Row, Col, Form, FormControl } from "react-bootstrap";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {login} from '../../actions/auth'


const Login = ({login}) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [showModal, setShowModal] = useState(location.search === 'login');

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

  const navigate = useNavigate()
  const [userData, setUserData] = useState({ username: '', password: '' })
  const { username, password } = userData;

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  const onLoginClick = (e) => {
    e.preventDefault()
    console.log('Login ' + username + ' ' + password);
    login(userData, () => navigate('/dashboard'))
  }

return(
    <Container>
      <Row>
        <Col md="4">
          <h1>Login</h1>
          <Form>
            <Form.Group controlId="usernameId">
              <Form.Label>User name</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter user name"
                value={userData.username}
                onChange={onChange}
              />
              <FormControl.Feedback type="invalid"></FormControl.Feedback>
            </Form.Group>

            <Form.Group controlId="passwordId">
              <Form.Label>Your password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
              value={userData.password}
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
          </Form>
          <Button color="primary" onClick={onLoginClick}>Login</Button>
          <p className="mt-2">
            Don't have account? <Link to="/signup">Signup</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

// connect action and store to the component
Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});


export default connect(mapStateToProps, { login })(Login);

