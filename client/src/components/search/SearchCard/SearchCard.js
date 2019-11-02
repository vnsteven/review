import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { imageTMDB } from '../../../utils/constants';

import { ReactComponent as Send } from '../../../assets/svg/send.svg';
import './SearchCard.scss';

function SearchCard({
  title,
  posterPath
}) {

  let posterURL = imageTMDB + posterPath

  if (!posterPath) {
    posterURL = 'https://www.porcelaingres.com/img/collezioni/JUST-GREY/big/just_grey_light_grey.jpg'
  }

  return (
    <div className="movie-card">
      <img
        className="movie-card--picture"
        src={posterURL}
        alt="picture"
      />
      <h2 className="movie-card--title">{title}</h2>
      <Link
        className="movie-card--send"
        to={`/send?title=${title}&overview=${null}`}
      >
        <Send />
      </Link>
    </div>
  )
}

SearchCard.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired
}

export default SearchCard;
