import { GET_MOVIES } from "../Utils/Actions"

const initialState = {
  moviesList: [],
  moviesLoaded: false,
  moviesLoadedAt: null,
}

export default function (state = initialState, action) {
  const { data, type } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesList: data,
        moviesLoaded: true,
        moviesLoadedAt: new Date(),
      };
    default:
      return state;
  }
}
