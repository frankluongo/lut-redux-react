import { TOGGLE_MESSAGE } from "../Utils/Actions"

const initialState = {
  visibility: false,
}

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case TOGGLE_MESSAGE:
      return {
        ...state,
        visibility: !state.visibility
      };
    default:
      return state;
  }
}
