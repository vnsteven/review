import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';

import { connect } from 'react-redux';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './routing/Routes';

function App({ isAuthenticated }) {
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
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(App);
