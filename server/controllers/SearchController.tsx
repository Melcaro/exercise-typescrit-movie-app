import express from 'express';
import * as SearchStore from '../store/MoviesStore';

export async function searchContent(
  req: express.Request,
  res: express.Response
) {
  try {
    const { query: userQuery } = req.params;
    const results = await SearchStore.fetchContent(userQuery);
    res.json(results);
  } catch (e) {
    console.error(e);
  }
}
