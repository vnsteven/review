import React, { useState } from 'react';

import SearchCard from '../SearchCard/SearchCard';
import { urlTMDB } from '../../../utils/constants';

import { ReactComponent as Search } from '../../../assets/svg/search.svg';

import './SearchList.scss';

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
      setMovieList(resData.results.slice(0, 10));
    } else {
      setMovieList([]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="review">
      <h1 className="review__title">Nouvelle review</h1>
      <form className="review__searchbar" onSubmit={handleSubmit}>
        <input
          autoFocus
          value={searchValue}
          onChange={handleChange}
          type="text"
          className="review__searchbar--input"
          placeholder="Chercher un film"
        />
        <Search />
      </form>
      <div className="review__list">
        {
          movieList.map(movie => (
            <SearchCard
              key={movie.id}
              title={movie.title}
              overview={movie.overview}
              posterPath={movie.poster_path}
            />
          ))
        }
      </div>
    </div>
  )
}

export default SearchList;
