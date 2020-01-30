import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


import Header from '../Common/Header';
import MovieList from '../List/MovieList';
import MovieDetail from '../Detail/MovieDetail';
import StoreProvider from "../Stores/StoreProvider";


function Application() {
  return (
    <StoreProvider>
      <Router>
        <section className="Application">
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={MovieList} />
              <Route exact path="/:id" component={MovieDetail} />
            </Switch>
          </main>
        </section>
      </Router>
    </StoreProvider>
  );
}

export default Application;
