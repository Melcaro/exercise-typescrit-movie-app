import express from 'express';
import * as MoviesStore from '../store/MoviesStore';

export async function getMovies(req: express.Request, res: express.Response) {
  try {
    const results = await MoviesStore.fetchMovies();
    res.json(results);
  } catch (e) {
    console.error(e);
  }
}

export async function getMovieByID(
  req: express.Request,
  res: express.Response
) {
  try {
    const { movieID } = req.params;
    const results = await MoviesStore.fetchMovieByID(movieID);
    res.json(results);
  } catch (e) {
    console.error(e);
  }
}

export async function getMovieCast(
  req: express.Request,
  res: express.Response
) {
  try {
    const { movieID } = req.params;
    const results = await MoviesStore.fetchMovieCast(movieID);
    res.json(results);
  } catch (e) {
    console.error(e);
  }
}
