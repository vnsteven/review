import React, { useState, Fragment } from 'react';

import TextField from '@material-ui/core/TextField';
import SearchCard from './SearchCard';
import { urlTMDB } from '../../utils/constants';

const formStyle = {
  display: 'flex',
  justifyContent: 'center'
}

function SearchList() {
  const [searchValue, setSearchValue] = useState('');
  const [movieList, setMovieList] = useState([]);

  async function handleChange(e) {
    const value = e.target.value;
    setSearchValue(e.target.value);
    if (value.length >= 1) {
      const res = await fetch(
        `${urlTMDB}&language=fr-FR&query=${value}&page=1&include_adult=false`,
        {
          method: 'GET'
        })
      const resData = await res.json();
      setMovieList(resData.results);
    } else {
      setMovieList([]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Fragment>
      <form style={formStyle} onSubmit={handleSubmit}>
        <TextField
          autoFocus
          value={searchValue}
          onChange={handleChange}
          margin="normal"
          inputProps={{ 'aria-label': 'bare' }}
          placeholder='Chercher un film'
        />
      </form>
      {
        movieList.map(movie => (
          <SearchCard
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
          />
        ))
      }
    </Fragment>
  )
}

export default SearchList;
