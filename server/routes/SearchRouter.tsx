import { Router } from 'express';
const SearchCtrl = require('../controllers/SearchController');

const router = Router();

router.get('/:query', SearchCtrl.searchContent);

module.exports = router;
