import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { sendReview } from '../../../store/actions/review';

import DefaultPicture from '../../../assets/img/default-picture.jpg';
import './UserCard.scss';

function UserCard({
  location,
  id,
  name,
  sendReview
}) {
  const [isSent, setIsSent] = useState(false);
  const params = new URLSearchParams(location.search);
  const title = params.get('title');
  const description = params.get('overview');

  function handleSend() {
    sendReview(id, {
      title,
      description
    })
    setIsSent(true);
  }

  return (
    <div className="user-card">
      <img
        className="user-card--picture"
        src={DefaultPicture}
        alt="profile-picture"
      />
      <h3 className="user-card--name">{name}</h3>
      <button
        className="user-card--send-button"
        onClick={handleSend}
        variant='contained'
        color='primary'
        disabled={isSent}
      >
        {isSent ? 'Envoyé' : 'Envoyer'}
      </button>
    </div>
  )
}

UserCard.propTypes = {
  location: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sendReview: PropTypes.func.isRequired
}

export default connect(
  null,
  { sendReview }
)(withRouter(UserCard));
