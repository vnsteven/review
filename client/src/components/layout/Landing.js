import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div>
      <Link to='/sign-up'>Nouveau ?</Link>
      <Link to='/sign-in'>Déjà un compte ?</Link>
    </div>
  )
}

export default Landing;
