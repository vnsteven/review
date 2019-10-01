import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  display: 'flex',
  backgroundColor: '#3F52B5',
  padding: '1rem',
  justifyContent: 'space-around'
}

const linkStyle = {
  textDecoration: 'none',
  color: 'white'
}

function Navbar() {
  return (
    <div style={navStyle}>
      <Link to='/contact' style={linkStyle}><span style={linkStyle}>Contact</span></Link>
      <Link to='/create' style={linkStyle}><span style={linkStyle}>Créer</span></Link>
      <Link to='/added' style={linkStyle}><span style={linkStyle}>Ajoutées</span></Link>
      <Link to='/account' style={linkStyle}><span style={linkStyle}>Compte</span></Link>
    </div>
  )
}

export default Navbar;
