import React, { Component } from 'react';
import * as Types from '../../../commons/Types';
import { getMoviesList } from '../services/fetchDataServices';

import {
  MoviesContainer,
  MoviesContainerTitle,
  MovieContainer,
  ImgContainer,
  MovieImg,
  MovieTitleContainer,
  MovieTitle,
} from '../styles/MoviesStyle';

export class Movies extends Component<Types.IMoviesProps, Types.IMoviesState> {
  state = {
    moviesList: [],
  };
  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const moviesList = await getMoviesList();
    this.setState({ moviesList });
  };

  render() {
    const { moviesList } = this.state;
    return (
      <MoviesContainer>
        <MoviesContainerTitle>Latest Movies</MoviesContainerTitle>
        {moviesList.map(({ id, poster_path, title }: Types.IResult) => (
          <MovieContainer to={`/movie/${id}`} key={id}>
            <ImgContainer>
              <MovieImg
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt="movie poster"
              />
            </ImgContainer>
            <MovieTitleContainer>
              <MovieTitle title={title}>{title}</MovieTitle>
            </MovieTitleContainer>
          </MovieContainer>
        ))}
      </MoviesContainer>
    );
  }
}
