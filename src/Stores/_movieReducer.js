import { GET_MOVIE, RESET_MOVIE } from "../Utils/Actions"

const initialState = {
  data: {},
  movieLoaded: false
}

export default function (state = initialState, action) {
  const { data, type } = action;
  switch (type) {
    case GET_MOVIE:
      return {
        ...state,
        data,
        movieLoaded: true
      };
    case RESET_MOVIE:
      return {
        ...state,
        data: {},
        movieLoaded: false
      };
    default:
      return state;
  }
}
