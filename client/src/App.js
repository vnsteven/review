import React, { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { loadUser } from './store/actions/auth';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing/Landing';
import Routes from './routing/Routes';

import './App.scss';

function App({
  isAuthenticated,
  loadUser
}) {
  useEffect(() => {
    loadUser()
  }, [loadUser])

  return (
    <Fragment>
      {isAuthenticated && <Navbar />}
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route component={Routes} />
      </Switch>
    </Fragment>
  );
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  loadUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(
  mapStateToProps,
  { loadUser }
)(App);
