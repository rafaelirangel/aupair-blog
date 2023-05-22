import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import SignUpModal from './SignUpModal.js'
import './SignUp.css'
import { Container, Button, Row, Col, Form, FormControl } from "react-bootstrap";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signupNewUser } from '../../actions/auth.js';


const SignUp = ({ signupNewUser }) => {
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

    useEffect(() => {
        signupNewUser();
    }, [signupNewUser]);


    const [signupData, setSignupData] = useState({ username: "", password: "" })
    const { username, password } = signupData;

    const [showErrorToast, setShowErrorToast] = useState(false);

    const onChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
    }

    const onSignupClick = (e) => {
        e.preventDefault()
        const userData = {
            username: username,
            password: password
        }
        signupNewUser(userData)
        console.log('Sign up' + username + ' ' + password);
    }

    return (
        <Container>
            <Row>
                <Col md="4">
                    <h1>Sign up</h1>
                    <Form>
                        <Form.Group controlId="usernameId">
                            <Form.Label>User name</Form.Label>
                            <Form.Control
                                // isInvalid={createUser.usernameError}
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
                                // isInvalid={createUser.passwordError}
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

    // connect action and reducer
    SignUp.propTypes = {
        signupNewUser: PropTypes.func.isRequired,
        createUser: PropTypes.object.isRequired
    };

    const mapStateToProps = (state) => ({
        createUser: state.createUser
    });



export default connect(mapStateToProps, { signupNewUser })(SignUp);

