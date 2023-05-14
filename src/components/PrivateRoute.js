import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const PrivateRoute = ({ element: Element, auth, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if(auth.isLoading) {
                return <h2>Loading...</h2>
            } else if (!auth.isAuthenticated) {
                return <Navigate to='/blog' />
            } else {
                return <Element {...props} />;
            }
        }}
    />
);

const mapStateProps = state => ({
    auth: state.auth
})

export default connect(mapStateProps)(PrivateRoute)
