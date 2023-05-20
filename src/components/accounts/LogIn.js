import { useState } from 'react';
import { Link, useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import LogInModal from './LogInModal';
import './LogIn.css'
import { Container, Button, Row, Col, Form, FormControl } from "react-bootstrap";


const Login = () => {
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

  const [loginData, setLoginData] = useState({ username: '', password: '' })
  const { username, password } = loginData;

  const onChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  const onLoginClick = (e) => {
    e.preventDefault()
    console.log('Login ' + username + ' ' + password);
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
                value={username}
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
                value={password}
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


export default Login;
