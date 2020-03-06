import { Router } from 'express';
const ActorCtrl = require('../controllers/ActorController');

const router = Router();

router.get('/:actorID', ActorCtrl.getActorInfos);

router.get('/:actorID/movie_credits', ActorCtrl.getActorFilmography);

module.exports = router;
