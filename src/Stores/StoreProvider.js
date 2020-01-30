import React from 'react'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger"
import thunk from "redux-thunk"
import { save, load } from "redux-localstorage-simple"

import rootReducer from "./rootReducer";

const middleware = [logger, thunk, save()]

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware))
);

const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default StoreProvider


