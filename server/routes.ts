import express from 'express';
const MoviesRouter = require('./routes/MoviesRouter');
const ActorRouter = require('./routes/ActorRouter');
const SearchRouter = require('./routes/SearchRouter');

export function routes(app: express.Application) {
  app.use('/api/v1/movies', MoviesRouter);
  app.use('/api/v1/actor', ActorRouter);
  app.use('/api/v1/search', SearchRouter);
}
