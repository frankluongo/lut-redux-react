import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Poster from '../Common/Poster';

import { posterBaseUrl } from "../API/moviedb"

const Movie = ({ movie }) => {
  return (
    <Link to={`/${movie.id}`}>
      <Poster src={`${posterBaseUrl}${movie.poster_path}`} alt={movie.title} />
    </Link>
  )
}

Movie.defaultProps = {
  movie: {}
}

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie
