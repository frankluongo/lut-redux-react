import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from '../Common/Header';
import MovieList from '../List/MovieList';
import MovieDetail from '../Detail/MovieDetail';


function Application() {
  return (
    <Router>
      <section className="Application">
        <Header />
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/:id" component={MovieDetail} />
        </Switch>
      </section>
    </Router>
  );
}

export default Application;
