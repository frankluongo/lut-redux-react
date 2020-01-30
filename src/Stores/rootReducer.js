import { combineReducers } from "redux";

import movie from "./_movieReducer";
import movies from "./_moviesReducer";
import toggle from "./_toggleReducer";

const rootReducer = combineReducers({
  movie,
  movies,
  toggle,
})

export default rootReducer
