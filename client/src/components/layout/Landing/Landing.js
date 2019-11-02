import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import './Landing.scss';
import { ReactComponent as Logo } from '../../../assets/svg/logo.svg';

function Landing({ isAuthenticated }) {
  if (isAuthenticated) {
    return <Redirect to='/create' />
  }

  return (
    <div className="landing">
      <header className="landing__header">
        <h1 className="landing__header--title">
          Bienvenue sur Reco. !
        </h1>
        <div className="landing__header--logo">
          <Logo />
        </div>
      </header>
      <div className="landing__btn">
        <button className="landing__btn--facebook">
          <Link to='#'>
            Se connecter avec Facebook
          </Link>
        </button>
        <button className="landing__btn--sign-up">
          <Link
            to='sign-up'
          >
            S'inscrire
          </Link>
        </button>
        <button className="landing__btn--sign-in">
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
