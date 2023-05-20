import { useState } from 'react';
import { Link, useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import SignUpModal from './SignUpModal.js'
import './SignUp.css'
import { Container, Button, Row, Col, Form, FormControl } from "react-bootstrap";


const SignUp = () => {
    // const location = useLocation();
    // const navigate = useNavigate();
    // const [showSignupModal, setshowSignupModal] = useState(location.search === 'signup');

    // // When the modal is closed, the showModal state is set to false,
    // // and the URL's search is set to an empty string
    // const handleModalClose = () => {
    //     setshowSignupModal(false);
    //     navigate({ search: '' });
    // };

    // //This navigates to the desired URL when the button is clicked and when the modal is closed.
    // const handleButtonClick = () => {
    //     setshowSignupModal(true);
    //     navigate({ search: '/signup' });
    // };

    // return (
    //     <div className='login-wrapper'>
    //         <button className='loginLink' onClick={handleButtonClick}>SignUp</button>
    //         {showSignupModal && <SignUpModal onClose={handleModalClose} />}
    //     </div>
    // );

    const [signupData, setSignupData] = useState({username: '', password: ''})
    const {username, password} = signupData;

    const onChange = (e) => {
        setSignupData({...signupData, [e.target.name]: e.target.value });
    }

    const onSignupClick = (e) => {
        e.preventDefault() 
        console.log('Sign up' + username + ' ' + password);
    }

    return(
        <Container>
            <Row>
                <Col md="4">
                    <h1>Sign up</h1>
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
                    <Button color="primary" onClick={onSignupClick}>
                        Sign up
                    </Button>
                    <p className="mt-2">
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};
    

export default SignUp;

