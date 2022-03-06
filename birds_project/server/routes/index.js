const express = require('express');
const { getBirds, patchBird } = require('../controller');

const router = express.Router();

router.get('', getBirds);
router.patch('/:id', patchBird);

module.exports = router;
