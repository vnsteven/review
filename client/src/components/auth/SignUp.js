import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { register } from '../../store/actions/auth';

import './SignForm.scss';

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
      className='form'
    >
      <div className="form__group">
        <label htmlFor="name" className="form__group--label">
          Nom
        </label>
        <input
          autoFocus
          id='name'
          type='text'
          value={name}
          onChange={handleChange}
          name='name'
          placeholder='3 caractères min'
          className="form__group--input"
        />
      </div>
      <div className="form__group">
        <label htmlFor="name" className="form__group--label">
          Téléphone
        </label>
        <input
          autoFocus
          id='name'
          type='text'
          value={phonenumber}
          onChange={handleChange}
          name='phonenumber'
          placeholder='+33 6 xx xx xx xx'
          className="form__group--input"
        />
      </div>
      <div className="form__group">
        <label htmlFor="name" className="form__group--label">
          Mot de passe
        </label>
        <input
          autoFocus
          id='name'
          type='password'
          value={password}
          onChange={handleChange}
          name='password'
          placeholder='8 caractères minimum'
          className="form__group--input"
        />
      </div>
      <div className="form__group">
        <label htmlFor="name" className="form__group--label">
          Confirmer le mot de passe
        </label>
        <input
          autoFocus
          id='name'
          type='password'
          value={password2}
          onChange={handleChange}
          name='password2'
          placeholder='8 caractères minimum'
          className="form__group--input"
        />
      </div>
      <div className="form__submit">
        <button
          type="submit"
          className="form__submit--button"
        >
          Inscription
          </button>
      </div>
      <div className="sign-in">
        <Link to="/sign-in">
          Déjà inscrit ?
        </Link>
      </div>
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
