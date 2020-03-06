import React, { Component } from 'react';
import * as Types from '../../../commons/Types';
import { getMovieByID, getMovieCast } from '../services/fetchDataServices';
import { isMovie, isCast } from '../utils/utils';
import { Link } from 'react-router-dom';

export class Movie extends Component<Types.IMovieProps, Types.IMovieState> {
  state: Types.IMovieState = {
    movieInfos: null,
    movieCast: [],
  };

  componentDidMount() {
    this.getMovieInfos();
  }

  getMovieInfos = async () => {
    const movieInfos = await getMovieByID(this.props.match.params.movieID);
    const movieCast = await getMovieCast(this.props.match.params.movieID);
    this.setState({ movieInfos, movieCast });
  };

  render() {
    const { movieInfos, movieCast }: Types.IMovieState = this.state;
    if (!isMovie(movieInfos) || !isCast(movieCast)) {
      return null;
    }

    const { poster_path, title, overview, release_date } = movieInfos;

    return (
      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt="movie poster"
          />
        </div>
        <div>
          <h1>{title}</h1>
          <p>{overview}</p>
          <p>Release: {release_date}</p>
        </div>
        <div>
          <h2>Cast:</h2>
          <div>
            {movieCast.map(({ id: actorID, character, name, profile_path }) => (
              <Link to={`/actor/${actorID}`}>
                <div key={actorID}>
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                      alt="actor pic"
                    />
                  </div>
                  <span>
                    {character} / {name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
