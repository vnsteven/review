import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Navbar.scss';
import { ReactComponent as Bookmark } from '../../../assets/svg/bookmark.svg';
import { ReactComponent as PlusCircle } from '../../../assets/svg/plus-circle.svg';
import { ReactComponent as Users } from '../../../assets/svg/users.svg';

function Navbar({ location }) {
  return (
    <div className="navbar">
      <Link
        to='/contact'
        className={`navbar__item ${location.pathname === "/contact" && "navbar__item--active"}`}
      >
        <Users />
        Echanges
      </Link>
      <Link
        to='/create'
        className={`navbar__item ${location.pathname === "/create" && "navbar__item--active"}`}
      >
        <PlusCircle />
        Créer
      </Link>
      <Link
        to='/added'
        className={`navbar__item ${location.pathname === "/added" && "navbar__item--active"}`}
      >
        <Bookmark />
        Bibliothèque
      </Link>
    </div>
  )
}

export default withRouter(Navbar);
