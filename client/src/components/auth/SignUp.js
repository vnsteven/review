import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { register } from '../../store/actions/auth';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const formStyle = {
  margin: '1rem',
  display: 'flex',
  flexDirection: 'column'
}

const titleStyle = {
  display: 'flex',
  justifyContent: 'center'
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
      <TextField
        autoFocus
        value={name}
        onChange={handleChange}
        name='name'
        placeholder='Nom'
      />
      <br />
      <TextField
        value={phonenumber}
        onChange={handleChange}
        name='phonenumber'
        placeholder='Téléphone'
      />
      <br />
      <TextField
        value={password}
        onChange={handleChange}
        name='password'
        type='password'
        placeholder='Mot de passe'
      />
      <br />
      <TextField
        value={password2}
        onChange={handleChange}
        name='password2'
        type='password'
        placeholder='Confirmer le mot de passe'
      />
      <br />
      <Button
        variant='contained'
        color='primary'
        type="submit"
      >
        Inscription
      </Button>
    </form>
  )
}

SignUp.propTypes = {
  register: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default connect(
  null,
  { register }
)(withRouter(SignUp));
