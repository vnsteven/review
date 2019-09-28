import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/auth';

const formStyle = {
  margin: '1rem',
  display: 'flex',
  flexDirection: 'column'
}

const inputStyle = {
  border: '1px solid black',
  padding: '.5rem'
}

const titleStyle = {
  display: 'flex',
  justifyContent: 'center'
}

const buttonStyle = {
  backgroundColor: '#0074D9',
  color: 'white',
  fontSize: '1rem',
  padding: '0.5rem'
}

function SignIn({
  signIn,
  history
}) {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  })

  const {
    name,
    password
  } = formData;

  function handleSubmit(e) {
    e.preventDefault();

    signIn({
      name,
      password
    }, history);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={formStyle}
    >
      <h1 style={titleStyle}>Se connecter</h1>
      <input
        value={name}
        onChange={handleChange}
        name='name'
        style={inputStyle}
        placeholder='Nom'
      />
      <br />
      <input
        value={password}
        onChange={handleChange}
        name='password'
        type='password'
        style={inputStyle}
        placeholder='Mot de passe'
      />
      <br />
      <button
        type="submit"
        style={buttonStyle}
      >
        Se connecter
      </button>
    </form>
  )
}

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired
}

export default connect(
  null,
  { signIn }
)(withRouter(SignIn));