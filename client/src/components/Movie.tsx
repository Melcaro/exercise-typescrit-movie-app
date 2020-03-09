import React, { Component } from 'react';
import * as Types from '../../../commons/Types';
import { getMovieByID, getMovieCast } from '../services/fetchDataServices';
import { isMovie, isCast } from '../utils/utils';

import {
  MovieContainer,
  ImgContainer,
  MovieImg,
  MovieInfos,
  MovieTitle,
  MovieDescription,
  MovieRelease,
  CastInfos,
  CastTitle,
  CastContainer,
  ActorContainer,
  ActorImgContainer,
  ActorImg,
  ActorRole,
  ActorName,
  CharacterName,
} from '../styles/MoviePageStyle';

export class Movie extends Component<Types.IMovieProps, Types.IMovieState> {
  state: Types.IMovieState = {
    movieInfos: null,
    movieCast: [],
  };

  componentDidMount() {
    this.getMovieInfos();
  }

  componentDidUpdate(prevProps: Types.IMovieProps) {
    if (this.props.match.params.movieID !== prevProps.match.params.movieID) {
      this.getMovieInfos();
    }
  }

  getMovieInfos = async () => {
    const movieInfos = await getMovieByID(this.props.match.params.movieID);
    const movieCast = await getMovieCast(this.props.match.params.movieID);
    console.log(movieInfos);
    this.setState({ movieInfos, movieCast });
  };

  render() {
    const { movieInfos, movieCast }: Types.IMovieState = this.state;
    if (!isMovie(movieInfos) || !isCast(movieCast)) {
      return null;
    }

    const { poster_path, title, overview, release_date } = movieInfos;

    return (
      <MovieContainer>
        <ImgContainer>
          <MovieImg
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1340&q=80'
            }
            alt="movie poster"
          />
        </ImgContainer>
        <MovieInfos>
          <MovieTitle>{title}</MovieTitle>
          <MovieDescription>{overview}</MovieDescription>
          <MovieRelease>Release: {release_date}</MovieRelease>
        </MovieInfos>
        <CastInfos>
          <CastTitle>CAST</CastTitle>
          <CastContainer>
            {movieCast.map(({ id: actorID, character, name, profile_path }) => (
              <ActorContainer to={`/actor/${actorID}`} key={actorID}>
                <ActorImgContainer>
                  <ActorImg
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                        : 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                    }
                    alt="actor pic"
                  />
                </ActorImgContainer>
                <ActorRole>
                  <ActorName>{name}</ActorName>
                  <CharacterName>{character}</CharacterName>
                </ActorRole>
              </ActorContainer>
            ))}
          </CastContainer>
        </CastInfos>
      </MovieContainer>
    );
  }
}
