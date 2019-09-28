import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './routing/Routes';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route component={Routes} />
      </Switch>
    </Fragment>
  );
}

export default App;
