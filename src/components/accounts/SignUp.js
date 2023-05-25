// import './LogInModal.css';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/authActions';
import { Navigate, Link } from 'react-router-dom';


const Signup = ({ signup, onClose, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();

        signup(name, email, password);
        setAccountCreated(true)
    };

    if (accountCreated) {
        return <Navigate to="/login" />
    }


    // Redirect to dashboard if authenticated
    if (isAuthenticated) {
        return <Navigate to="/dashboard" />
    }

    return (
        <div className='container mt-5'>
            <h1>Sign Up</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control mb-3'
                        type='text'
                        placeholder='Name*'
                        name='name'
                        value={name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>

                    <input
                        className='form-control mb-3'
                        type='email'
                        placeholder='Email*'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control mb-3'
                        type='password'
                        placeholder='Password*'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>

                <button className='btn btn-primary' type='submit'>Register</button>
            </form>

            <p className='mt-4 '>
                Already have an account? <Link to='/login'>Sign In</Link>
            </p>
        </div>
    );
};
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);