import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { signIn } from '../../../store/actions/auth';

import './SignIn.scss';

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
    <div className="sign-in">
      <h3 className="heading">
        <div className="heading__title">
          Se connecter
          </div>
      </h3>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <div className="form__group">
          <label htmlFor="name" className="form__group--label">
            Nom
            </label>
          <input
            name='name'
            id='name'
            value={name}
            onChange={handleChange}
            type="text"
            className="form__group--input"
            autoFocus
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="password" className="form__group--label">
            Mot de passe
            </label>
          <input
            name='password'
            value={password}
            onChange={handleChange}
            type="password"
            className="form__group--input"
            required
          />
        </div>
        <div className="form__group">
          <button
            type="submit"
            className="form__group--button"
          >
            Se connecter
          </button>
        </div>
      </form>
    </div>
  )
}

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default connect(
  null,
  { signIn }
)(withRouter(SignIn));