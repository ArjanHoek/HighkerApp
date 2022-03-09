import express from 'express';

const router = express.Router();

import {
  getLodges,
  createLodge,
  updateLodge,
  deleteLodge,
} from '../controllers/lodges.js';

router.get('/', getLodges);
router.post('/', createLodge);
router.patch('/:id', updateLodge);
router.delete('/:id', deleteLodge);

export default router;
