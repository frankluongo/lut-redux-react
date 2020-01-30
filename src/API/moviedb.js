const apiKey = process.env.REACT_APP_MDB_API_KEY;
const baseUrl = `https://api.themoviedb.org/3/`
export const listUrl = `${baseUrl}discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
export const posterBaseUrl = `http://image.tmdb.org/t/p/w154`;
export const backdropBaseUrl = `http://image.tmdb.org/t/p/w1280`
export const singleMovieUrl = (movieId) => {
  return `${baseUrl}movie/${movieId}?api_key=${apiKey}&language=en-US`;
}
