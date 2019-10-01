import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/auth';

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
      <TextField
        autoFocus
        value={name}
        onChange={handleChange}
        name='name'
        placeholder='Nom'
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
      <Button
        variant='contained'
        color='primary'
        type="submit"
      >
        Se connecter
      </Button>
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