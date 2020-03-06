import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Header } from './Header';
import { SearchBar } from './SearchBar';
import { Movies } from './Movies';
import { Movie } from './Movie';
import { Actor } from './Actor';

import { HomePageContainer } from '../styles/HomePageStyle';

export const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <BrowserRouter>
        <Route path="/" render={() => <Header />} />
        <Route path="/" render={() => <SearchBar />} />
        <Route exact path="/" render={() => <Movies />} />
        <Route
          exact
          path="/movie/:movieID"
          render={props => <Movie {...props} />}
        />
        <Route
          exact
          path="/actor/:actorID"
          render={props => <Actor {...props} />}
        />
      </BrowserRouter>
    </HomePageContainer>
  );
};
