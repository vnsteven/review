import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { sendReview } from '../../store/actions/review';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const cardStyle = {
  margin: '1rem'
}

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
    <Card style={cardStyle}>
      <CardContent>
        <h3>{name}</h3>
      </CardContent>
      <CardActions>
        <Button
          onClick={handleSend}
          variant='contained'
          color='primary'
          disabled={isSent}
        >
          {isSent ? 'Envoyé' : 'Envoyer'}
        </Button>
      </CardActions>
    </Card>
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
