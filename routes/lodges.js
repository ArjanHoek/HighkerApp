const express = require('express');

const router = express.Router();

const {
  getLodges,
  createLodge,
  updateLodge,
  deleteLodge,
} = require('../controllers/lodges.js');

router.get('/', getLodges);
router.post('/', createLodge);
router.patch('/:id', updateLodge);
router.delete('/:id', deleteLodge);

module.exports = router;
