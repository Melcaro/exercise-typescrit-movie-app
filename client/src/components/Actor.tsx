import React, { Component } from 'react';
import * as Types from '../../../commons/Types';
import {
  getActorInfos,
  getActorFilmography,
} from '../services/fetchDataServices';
import { isActor, isFilmography } from '../utils/utils';
import { Link } from 'react-router-dom';

export class Actor extends Component<Types.IActorProps, Types.IActorState> {
  state: Types.IActorState = {
    actorInfos: null,
    actorFilmography: null,
  };

  componentDidMount() {
    this.getActorData();
  }

  getActorData = async () => {
    const actorInfos = await getActorInfos(this.props.match.params.actorID);
    const actorFilmography = await getActorFilmography(
      this.props.match.params.actorID
    );
    this.setState({ actorInfos, actorFilmography });
  };
  render() {
    const { actorInfos, actorFilmography } = this.state;

    if (!isActor(actorInfos) || !isFilmography(actorFilmography)) {
      return null;
    }
    const { name, biography, profile_path } = actorInfos;
    return (
      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt="actor pic"
          />
        </div>
        <div>
          <h1>{name}</h1>
          <p>{biography}</p>
        </div>
        <div>
          <h2>Filmography:</h2>
          <div>
            {actorFilmography.map(({ character, title, id, backdrop_path }) => (
              <Link to={`/movie/${id}`}>
                <div key={id}>
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                      alt="movie pic"
                    />
                  </div>
                  <div>{title}</div>
                  <div>{character}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
