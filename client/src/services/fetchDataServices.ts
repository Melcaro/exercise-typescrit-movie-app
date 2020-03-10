import axios from 'axios';
import * as Types from '../../../commons/Types';

const URL = "/api/v1"
export async function getMoviesList() {
  const { data: results } = await axios.get<Types.IResult[]>(`${URL}/movies`);
  return results;
}

export async function getMovieByID(movieID: string) {
  const { data } = await axios.get<Types.IMovieResult>(`${URL}/movies/${movieID}`);
  return data;
}

export async function getMovieCast(movieID: string) {
  const { data } = await axios.get<Types.IActor[]>(
    `${URL}/movies/${movieID}/credits`
  );
  return data;
}

export async function getActorInfos(actorID: string) {
  const { data } = await axios.get<Types.IActorInfos>(`${URL}/actor/${actorID}`);
  return data;
}

export async function getActorFilmography(actorID: string) {
  const { data } = await axios.get<Types.IActorFilmography[]>(
    `${URL}/actor/${actorID}/movie_credits`
  );
  return data;
}

export async function searchForContent(userQuery: string) {
  const { data } = await axios.get<Types.ISearchResult[]>(
    `${URL}/search/${userQuery}`
  );
  return data;
}
