import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import { connect } from 'react-redux';

import SignUp from '../components/auth/SignUp';
import SignIn from '../components/auth/SignIn';
import Account from '../components/user/Account';
import SearchList from '../components/search/SearchList';
import Sendbox from '../components/sendbox/Sendbox';

function Routes({ isAuthenticated }) {
  const guest = (
    <Fragment>
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/sign-in" component={SignIn} />
    </Fragment>
  )

  return (
    <Fragment>
      <Switch>
        {!isAuthenticated && guest}
        <PrivateRoute path='/account' component={Account} />
        <PrivateRoute path='/create' component={SearchList} />
        <PrivateRoute path='/send' component={Sendbox} />
      </Switch>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Routes);
