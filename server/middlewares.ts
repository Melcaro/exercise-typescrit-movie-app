import express from 'express';

export function middlewares(app: express.Application) {
  app.use(express.json());
}
