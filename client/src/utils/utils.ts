import { IActorFilmography } from './../../../commons/Types';
import * as Types from '../../../commons/Types';

export function isMovie(
  movie: Types.IMovieResult | null
): movie is Types.IMovieResult {
  return movie !== null;
}

export function isCast(cast: Types.IActor[] | null): cast is Types.IActor[] {
  return cast !== null;
}

export function isActor(
  actor: Types.IActorInfos | null
): actor is Types.IActorInfos {
  return actor !== null;
}

export function isFilmography(
  filmography: Types.IActorFilmography[] | null
): filmography is Types.IActorFilmography[] {
  return filmography !== null;
}
