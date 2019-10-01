import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { sendReview } from '../../store/actions/review';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const cardStyle = {
  margin: '1rem'
}

const buttonStyle = {
  backgroundColor: '#0074D9',
  color: 'white',
  fontSize: '1rem',
  padding: '0.5rem'
};

function UserCard({
  location,
  id,
  name,
  sendReview
}) {
  const params = new URLSearchParams(location.search);

  function handleSend() {
    sendReview(id, {
      sender: id,
      title: params.get('title'),
      description: params.get('overview')
    })
  }

  return (
    <Card style={cardStyle}>
      <CardContent>
        <h3>{name}</h3>
      </CardContent>
      <CardActions>
        <Link
          to={`#`}
          style={{ textDecoration: 'none' }}
        >
          <Button
            onClick={handleSend}
            variant='contained'
            color='primary'
            style={buttonStyle}
          >
            Envoyer
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  sendReview: PropTypes.func.isRequired
}

export default connect(
  null,
  { sendReview }
)(withRouter(UserCard));
