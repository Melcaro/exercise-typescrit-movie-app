import { Router } from 'express';
import * as MoviesCtrl from '../controllers/MoviesController';

const router = Router();

router.get('/', MoviesCtrl.getMovies);

router.get('/:movieID/credits', MoviesCtrl.getMovieCast);
router.get('/:movieID', MoviesCtrl.getMovieByID);

export default router;
