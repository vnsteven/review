import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/auth';

import './SignForm.scss';

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
  };

  let isActive = false;
  if (formData.name.length > 0 && formData.password.length > 0) {
    isActive = !isActive
  }

  return (
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
          id='password'
          value={password}
          onChange={handleChange}
          type="password"
          className="form__group--input"
          required
        />
      </div>
      <div className="form__submit">
        <button
          type="submit"
          className={isActive ? "form__submit--button" : "form__submit--button form__submit--button--active"}
          disabled={isActive ? false : "disabled"}
        >
          Connexion
        </button>
      </div>
      <div className="sign-up">
        <Link to="/sign-up">
          Pas encore de compte ?
        </Link>
      </div>
    </form>
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