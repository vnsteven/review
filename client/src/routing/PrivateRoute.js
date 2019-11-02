import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

function PrivateRoute({
  component: Component,
  auth: { isAuthenticated },
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ?
          <Redirect to='/sign-in' /> :
          <Component {...props} />
      }
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  auth: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute);