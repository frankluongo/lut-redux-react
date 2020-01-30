import React, { useState, useEffect } from 'react'

import { backdropBaseUrl, posterBaseUrl, singleMovieUrl } from "../API/moviedb"
import MovieWrapper from './MovieWrapper'
import MovieInfo from './MovieInfo'
import Poster from '../Common/Poster'
import updateStateWithData from '../Utils/updateStateWithData'

const MovieDetail = (props) => {
  const [movie, updateMovie] = useState({
    backdrop_path: '',
    overview: '',
    poster_path: '',
    release_date: '',
    title: ''
  })
  const url = singleMovieUrl(getMovieId(props));

  useEffect(() => {
    updateStateWithData(url, updateMovie)
  }, [url]);

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

  function getImagePath(basePath, imagePath, dimensions) {
    if (imagePath === '') {
      return `https://source.unsplash.com/random/${dimensions}154x231`
    } else {
      return `${basePath}${imagePath}`;
    }

  }

  function getMovieId(props) {
    return props.match.params.id;
  }
}

export default MovieDetail
