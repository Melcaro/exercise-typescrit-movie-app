import { Router } from 'express';
import * as ActorCtrl from '../controllers/ActorController';

const router = Router();

router.get('/:actorID', ActorCtrl.getActorInfos);

router.get('/:actorID/movie_credits', ActorCtrl.getActorFilmography);

export default router;
