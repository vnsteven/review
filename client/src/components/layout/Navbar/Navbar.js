import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';
import { ReactComponent as Bookmark } from '../../../assets/svg/bookmark.svg';
import { ReactComponent as PlusCircle } from '../../../assets/svg/plus-circle.svg';
import { ReactComponent as Users } from '../../../assets/svg/users.svg';

function Navbar() {
  return (
    <div className="navbar">
      <Link to='/contact'>
        <Users />
        Echanges
        </Link>
      <Link to='/create'>
        <PlusCircle />
        Créer
        </Link>
      <Link to='/added'>
        <Bookmark />
        Bibliothèque
        </Link>
      {/* <Link to='/account'>Compte</Link> */}
    </div>
  )
}

export default Navbar;
