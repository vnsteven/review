import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
      <Link to='/sign-up'><button style={{ backgroundColor: '#0074D9', color: 'white', fontSize: '1rem' }}>Nouveau ?</button></Link>
      <Link to='/sign-in'><button style={{ backgroundColor: '#0074D9', color: 'white', fontSize: '1rem' }}>Déjà un compte ?</button></Link>
    </div>
  )
}

export default Landing;
