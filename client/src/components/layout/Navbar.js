import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{
      display: 'flex',
      backgroundColor: '#0074D9',
      padding: '1rem',
      justifyContent: 'space-around'
    }}>
      <Link to='/contact' style={{ textDecoration: 'none' }}><span style={{ color: 'white' }}>Contacts</span></Link>
      <Link to='/create' style={{ textDecoration: 'none' }}><span style={{ color: 'white' }}>Créer</span></Link>
      <Link to='/add' style={{ textDecoration: 'none' }}><span style={{ color: 'white' }}>Ajoutées</span></Link>
      <Link to='/account' style={{ textDecoration: 'none' }}><span style={{ color: 'white' }}>Compte</span></Link>
    </div>
  )
}

export default Navbar;
