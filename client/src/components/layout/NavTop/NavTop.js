import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { ReactComponent as ChevronLeft } from '../../../assets/svg/chevron-left.svg';
import { ReactComponent as Settings } from '../../../assets/svg/settings.svg';

import './NavTop.scss';

function NavTop() {
  return (
    <div className="navtop">
      <Link to="/">
        <ChevronLeft />
      </Link>
      <Link to="/account">
        <Settings />
      </Link>
    </div>
  )
}

export default withRouter(NavTop);
