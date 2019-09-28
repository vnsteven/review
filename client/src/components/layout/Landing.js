import React from 'react';
import { Link } from 'react-router-dom';

const landingStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem'
}

const buttonStyle = {
  backgroundColor: '#0074D9',
  color: 'white',
  fontSize: '1rem',
  margin: '.5rem',
  padding: '.5rem'
}

function Landing() {
  return (
    <div style={landingStyle}>
      <Link to='/sign-up'><button style={buttonStyle}>Nouveau ?</button></Link>
      <Link to='/sign-in'><button style={buttonStyle}>Déjà un compte ?</button></Link>
    </div>
  )
}

export default Landing;
