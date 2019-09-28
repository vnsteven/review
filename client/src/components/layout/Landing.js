import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

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

function Landing({ isAuthenticated }) {
  if (isAuthenticated) {
    return <Redirect to='/create' />
  }

  return (
    <div style={landingStyle}>
      <Link to='/sign-up'><button style={buttonStyle}>Nouveau ?</button></Link>
      <Link to='/sign-in'><button style={buttonStyle}>Déjà un compte ?</button></Link>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(withRouter(Landing));
