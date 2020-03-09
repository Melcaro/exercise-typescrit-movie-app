export interface IResult {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

export interface IPost {
  results: IResult[];
}

export interface ISearchBarState {
  userQuery: string;
  searchResult: ISearchResult[];
}

export interface ISearchBarProps {}

export interface ISearchResult {
  poster_path?: string;
  popularity: number;
  id: string;
  overview: string;
  backdrop_path?: string;
  vote_average: number;
  media_type: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: string[];
  original_language: string;
  vote_count: number;
  name?: string;
  original_name: string;
  title?: string;
  profile_path?: string;
}

export interface ISearchRequest {
  results: ISearchResult[];
}

export interface ISearchResultsProps {
  searchResult: ISearchResult[];
  onClick: () => void;
}

export interface IMoviesState {
  moviesList: IResult[];
}

export interface IMoviesProps {}

export interface IMovieResult {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: any[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: any[];
  production_countries: any[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: any[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieState {
  movieInfos: IMovieResult | null;
  movieCast: IActor[] | null;
}

export interface IActor {
  cast_id: string;
  character: string;
  credit_id: string;
  gender: number;
  id: string;
  name: string;
  order: number;
  profile_path: string;
}

export interface ICast {
  cast: IActor[];
}

export interface IActorInfos {
  birthday: string;
  known_for_department: string;
  deathday: any;
  id: string;
  name: string;
  also_known_as: string[];
  gender: number;
  biography: string;
  popularity: number;
  place_of_birth: string;
  profile_path: string;
  adult: boolean;
  imdb_id: string;
  homepage: string | null;
}

export interface IActorState {
  actorInfos: IActorInfos | null;
  actorFilmography: IActorFilmography[] | null;
}

export interface IActorFilmography {
  character: string;
  credit_id: string;
  release_date: string;
  vote_count: number;
  video: boolean;
  adult: boolean;
  vote_average: number;
  title: string;
  genre_ids: string[];
  original_language: string;
  original_title: string;
  popularity: number;
  id: string;
  backdrop_path: string;
  overview: string;
  poster_path: string;
}

export interface IFilmographyResult {
  cast: IActorFilmography[];
}
