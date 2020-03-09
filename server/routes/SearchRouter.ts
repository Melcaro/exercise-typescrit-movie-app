import { Router } from 'express';
import * as SearchCtrl from '../controllers/SearchController';

const router = Router();

router.get('/:query', SearchCtrl.searchContent);

export default router;
