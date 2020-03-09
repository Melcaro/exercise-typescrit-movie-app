import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as Types from '../../../commons/Types';
import {
  getActorInfos,
  getActorFilmography,
} from '../services/fetchDataServices';
import { isActor, isFilmography } from '../utils/utils';

import {
  ActorPageContainer,
  ImgContainer,
  ActorImg,
  ActorInfos,
  ActorName,
  ActorBiography,
  Filmography,
  FilmoTitle,
  MoviesContainer,
  MovieContainer,
  MovieImgContainer,
  MovieImg,
  ActorRole,
  MovieTitle,
  CharacterName,
} from '../styles/ActorPageStyle';
interface IActorProps
  extends RouteComponentProps<{
    actorID: string;
  }> {}

export class Actor extends Component<IActorProps, Types.IActorState> {
  state: Types.IActorState = {
    actorInfos: null,
    actorFilmography: null,
  };

  componentDidMount() {
    this.getActorData();
  }

  componentDidUpdate(prevProps: IActorProps) {
    if (this.props.match.params.actorID !== prevProps.match.params.actorID) {
      this.getActorData();
    }
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
      <ActorPageContainer>
        <ImgContainer>
          <ActorImg
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            }
            alt="actor pic"
          />
        </ImgContainer>
        <ActorInfos>
          <ActorName>{name}</ActorName>
          <ActorBiography>{biography}</ActorBiography>
        </ActorInfos>
        <Filmography>
          <FilmoTitle>FILMOGRAPHY</FilmoTitle>
          <MoviesContainer>
            {actorFilmography.map(({ character, title, id, backdrop_path }) => (
              <MovieContainer to={`/movie/${id}`} key={id}>
                <MovieImgContainer>
                  <MovieImg
                    src={
                      backdrop_path
                        ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                        : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1340&q=80'
                    }
                    alt="movie pic"
                  />
                </MovieImgContainer>
                <ActorRole>
                  <MovieTitle>{title}</MovieTitle>
                  <CharacterName>{character}</CharacterName>
                </ActorRole>
              </MovieContainer>
            ))}
          </MoviesContainer>
        </Filmography>
      </ActorPageContainer>
    );
  }
}
