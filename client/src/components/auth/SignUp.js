import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { register } from '../../store/actions/auth';

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

function SignUp({
  register,
  history
}) {
  const [formData, setFormData] = useState({
    name: '',
    phonenumber: '',
    password: '',
    password2: ''
  })

  const {
    name,
    phonenumber,
    password,
    password2
  } = formData;

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== password2) {
      return console.error('Wrong password');
    }

    register({
      name,
      phonenumber,
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
      <h1 style={titleStyle}>Créer un compte</h1>
      <input
        value={name}
        onChange={handleChange}
        name='name'
        style={inputStyle}
        placeholder='Nom'
      />
      <br />
      <input
        value={phonenumber}
        onChange={handleChange}
        name='phonenumber'
        style={inputStyle}
        placeholder='Téléphone'
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
      <input
        value={password2}
        onChange={handleChange}
        name='password2'
        type='password'
        style={inputStyle}
        placeholder='Confirmer le mot de passe'
      />
      <br />
      <button
        type="submit"
        style={buttonStyle}
      >
        Inscription
      </button>
    </form>
  )
}

SignUp.propTypes = {
  register: PropTypes.func.isRequired
}

export default connect(
  null,
  { register }
)(withRouter(SignUp));
