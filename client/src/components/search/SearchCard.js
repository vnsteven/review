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
  color: 'white',
  fontSize: '1rem',
  padding: '0.5rem'
};

function SearchCard({
  title,
  overview
}) {
  return (
    <Card style={cardStyle}>
      <CardContent>
        <h3>{title}</h3>
        <p>{overview}</p>
      </CardContent>
      <CardActions>
        <Link
          to={`/send?title=${title}&overview=${overview}`}
          style={{ textDecoration: 'none' }}
        >
          <Button
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

SearchCard.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired
}

export default SearchCard;
