import { listUrl } from "../API/moviedb";
import dispatchWithData from "./dispatchWithData";

export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE';
export const GET_MOVIE = 'GET_MOVIE';
export const GET_MOVIES = 'GET_MOVIES';
export const RESET_MOVIE = 'RESET_MOVIE';

export function getMovie(singleMovieUrl) {
  return async function (dispatch) {
    dispatchWithData(dispatch, singleMovieUrl, GET_MOVIE)
  }
}

export function getMovies() {
  return async function (dispatch) {
    dispatchWithData(dispatch, listUrl, GET_MOVIES, 'results')
  }
}

export function resetMovie() {
  return {
    type: RESET_MOVIE
  }
}

export function toggleMessage() {
  return {
    type: TOGGLE_MESSAGE
  }
}
