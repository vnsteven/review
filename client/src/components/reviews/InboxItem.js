import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const cardStyle = {
  margin: '1rem'
}

const buttonStyle = {
  backgroundColor: '#0074D9',
  color: 'white'
};

function InboxItem({
  id,
  sender,
  title,
  description
}) {
  return (
    <Card style={cardStyle}>
      <CardContent>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardContent>
      <CardActions>
        <Link
          to={``}
          style={{ textDecoration: 'none' }}
        >
          <Button
            variant='contained'
            color='primary'
            style={buttonStyle}
          >
            Accepter
          </Button>
          &nbsp;
          <Button
            variant='contained'
            color='secondary'
          >
            Refuser
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

InboxItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default InboxItem;
