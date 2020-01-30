import React, { useEffect } from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux";

import { getMovie, resetMovie } from '../Utils/Actions';

import { backdropBaseUrl, posterBaseUrl, singleMovieUrl } from "../API/moviedb"
import MovieWrapper from './MovieWrapper'
import MovieInfo from './MovieInfo'
import Poster from '../Common/Poster'
import { getImagePath, getMovieId } from "./getters";

const MovieDetail = (props) => {
  const { getMovie, isLoaded, movie, resetMovie } = props;
  const url = singleMovieUrl(getMovieId(props));

  useEffect(handleMount, []);

  return (
    <MovieWrapper
      backdrop={`${getImagePath(backdropBaseUrl, movie.backdrop_path, '1280x720')}`}
    >
      <MovieInfo>
        <Poster
          src={`${getImagePath(posterBaseUrl, movie.poster_path, '154x231')}`}
          alt={movie.title}
          width="154"
        />
        <h1>{movie.title}</h1>
        <h3>{movie.release_date}</h3>
        <p>{movie.overview}</p>
      </MovieInfo>
    </MovieWrapper>
  )

  function handleMount() {
    if (!isLoaded) {
      getMovie(url)
    }
    return resetMovie
  }
}

const mapStateToProps = (state) => ({
  isLoaded: state.movie.movieLoaded,
  movie: state.movie.data
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ getMovie, resetMovie }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)
