import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import { connect } from 'react-redux';

import SignUp from '../components/auth/SignUp';
import SignIn from '../components/auth/SignIn';
import Account from '../components/profile/Account';
import SearchList from '../components/search/SearchList';
import UserList from '../components/user/UserList';
import ReviewSection from '../components/reviews/ReviewSection';

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
        <PrivateRoute exact path='/create' component={SearchList} />
        <PrivateRoute path='/account' component={Account} />
        <PrivateRoute path='/create' component={SearchList} />
        <PrivateRoute path='/send' component={UserList} />
        <PrivateRoute path='/added' component={ReviewSection} />
      </Switch>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Routes);
