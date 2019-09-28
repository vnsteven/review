import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import SignUp from '../components/auth/SignUp';

function Routes() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/sign-up" component={SignUp} />
      </Switch>
    </Fragment>
  )
}

export default Routes;
