import React, { useState, useEffect } from 'react'

import MovieGrid from "./MovieGrid";
import Movie from './Movie';
import { listUrl } from '../API/moviedb';
import updateStateWithData from '../Utils/updateStateWithData';

const MovieList = () => {
  const [movies, updateMovies] = useState([]);

  useEffect(() => {
    updateStateWithData(listUrl, updateMovies, 'results')
  }, [])

  return (
    <MovieGrid>
      {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
    </MovieGrid>
  )
}

export default MovieList
