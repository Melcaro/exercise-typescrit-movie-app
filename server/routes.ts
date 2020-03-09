import express from 'express';
import MoviesRouter from './routes/MoviesRouter';
import ActorRouter from './routes/ActorRouter';
import SearchRouter from './routes/SearchRouter';

export function routes(app: express.Application) {
  app.use('/api/v1/movies', MoviesRouter);
  app.use('/api/v1/actor', ActorRouter);
  app.use('/api/v1/search', SearchRouter);
}
