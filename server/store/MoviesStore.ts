import axios from 'axios';
import { auth } from '../services/auth';
import * as Types from '../../commons/Types';

export async function fetchMovies() {
  const {
    data: { results },
  } = await axios.get<Types.IPost>(
    `https://api.themoviedb.org/3/discover/movie`,
    { params: auth }
  );
  return results;
}

export async function fetchMovieByID(movieID: string) {
  const { data: movie } = await axios.get<Types.IMovieResult>(
    `https://api.themoviedb.org/3/movie/${movieID}`,
    { params: auth }
  );
  return movie;
}

export async function fetchMovieCast(movieID: string) {
  const {
    data: { cast },
  } = await axios.get<Types.ICast>(
    `https://api.themoviedb.org/3/movie/${movieID}/credits`,
    {
      params: auth,
    }
  );
  return cast;
}

export async function fetchActorInfos(actorID: string) {
  const { data } = await axios.get<Types.IActorInfos>(
    `https://api.themoviedb.org/3/person/${actorID}`,
    {
      params: auth,
    }
  );
  return data;
}

export async function fetchActorFilmography(actorID: string) {
  const {
    data: { cast },
  } = await axios.get<Types.IFilmographyResult>(
    `https://api.themoviedb.org/3/person/${actorID}/movie_credits`,
    {
      params: auth,
    }
  );
  return cast;
}

export async function fetchContent(userQuery: string) {
  const {
    data: { results },
  } = await axios.get<Types.ISearchRequest>(
    `https://api.themoviedb.org/3/search/multi`,
    { params: { api_key: auth.api_key, query: userQuery, page: 1 } }
  );
  return results;
}
