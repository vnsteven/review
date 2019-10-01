import React, { useState, Fragment } from 'react';

import TextField from '@material-ui/core/TextField';
import SearchCard from './SearchCard';

const formStyle = {
  display: 'flex',
  justifyContent: 'center'
}

function SearchList() {
  const [searchValue, setSearchValue] = useState('');
  const [movieList, setMovieList] = useState([]);

  async function handleChange(e) {
    setSearchValue(e.target.value);
    if (searchValue.length > 3) {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=6f7143ca51e64aa9d8ca2d8289dc7ac4&language=fr-FR&query=${searchValue}&page=1&include_adult=false`,
        {
          method: 'GET'
        })
      const resData = await res.json();
      setMovieList(resData.results);
    } else {
      setMovieList([]);
    }
  }

  return (
    <Fragment>
      <form style={formStyle}>
        <TextField
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
