import axios from 'axios';
import * as Types from '../../../commons/Types';

export async function getMoviesList() {
  const { data: results } = await axios.get<Types.IResult[]>(`/movies`);
  return results;
}

export async function getMovieByID(movieID: string) {
  const { data } = await axios.get<Types.IMovieResult>(`/movies/${movieID}`);
  return data;
}

export async function getMovieCast(movieID: string) {
  const { data } = await axios.get<Types.IActor[]>(
    `/movies/${movieID}/credits`
  );
  return data;
}

export async function getActorInfos(actorID: string) {
  const { data } = await axios.get<Types.IActorInfos>(`/actor/${actorID}`);
  return data;
}

export async function getActorFilmography(actorID: string) {
  const { data } = await axios.get<Types.IActorFilmography[]>(
    `/actor/${actorID}/movie_credits`
  );
  return data;
}

export async function searchForContent(userQuery: string) {
  const { data } = await axios.get<Types.ISearchResult[]>(
    `/search/${userQuery}`
  );
  return data;
}
