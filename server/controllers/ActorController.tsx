import express from 'express';
import * as ActorStore from '../store/MoviesStore';

export async function getActorInfos(
  req: express.Request,
  res: express.Response
) {
  try {
    const { actorID } = req.params;
    const results = await ActorStore.fetchActorInfos(actorID);
    res.json(results);
  } catch (e) {
    console.error(e);
  }
}

export async function getActorFilmography(
  req: express.Request,
  res: express.Response
) {
  try {
    const { actorID } = req.params;
    const results = await ActorStore.fetchActorFilmography(actorID);
    res.json(results);
  } catch (e) {
    console.error(e);
  }
}
