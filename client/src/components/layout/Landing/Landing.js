import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import './Landing.scss';
import { ReactComponent as Logo } from '../../../assets/img/logo.svg';

function Landing({ isAuthenticated }) {
  if (isAuthenticated) {
    return <Redirect to='/create' />
  }

  return (
    <div className="container">
      <header className="header">
        <h1 className="header__title">
          Bienvenue sur Reco. !
        </h1>
        <div className="header__logo">
          <Logo />
        </div>
      </header>
      <div className="btn">
        <button className="btn__facebook">
          <Link to='#'>
            Se connecter avec Facebook
          </Link>
        </button>
        <button className="btn__sign-up">
          <Link
            to='sign-up'
          >
            S'inscrire
          </Link>
        </button>
        <button className="btn__sign-in">
          <Link to='sign-in'>
            Se connecter
          </Link>
        </button>
      </div>
      <p className="user-condition">
        En continuant, j'accepte les <span>conditions d'utilisation</span> de Reco.
      </p>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(withRouter(Landing));
