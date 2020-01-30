import React, { useEffect } from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux";
import { getMovies } from '../Utils/Actions';

import MovieGrid from "./MovieGrid";
import Movie from './Movie';

const MovieList = ({ getMovies, isLoaded, movies, moviesLoadedAt }) => {
  const oneHour = 60 * 60 * 1000;
  useEffect(() => {
    if (!isLoaded || isMoreThanOneHour()) {
      getMovies();
    }
  }, [getMovies, isLoaded])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <MovieGrid>
      {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
    </MovieGrid>
  )

  function isMoreThanOneHour() {
    return ((new Date()) - new Date(moviesLoadedAt)) > oneHour;
  }
}

const mapStateToProps = (state) => ({
  isLoaded: state.movies.moviesLoaded,
  movies: state.movies.moviesList,
  moviesLoadedAt: state.movies.moviesLoadedAt
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ getMovies }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
