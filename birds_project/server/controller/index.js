const asyncHandler = require('express-async-handler');
const model = require('../model');

const getBirds = asyncHandler(async (req, res) => {
  res.status(200).json(model.getBirds());
});

const patchBird = asyncHandler(async (req, res) => {
  if (req.params.id && req.body.name) {
    const birds = model.getBirds();
    if (birds.map((el) => el.id).includes(Number(req.params.id))) {
      res.status(200).json(model.patchBird(req.params.id, req.body.name));
    } else res.status(500).send('Not found.');
  } else res.status(404).send('Invalid values.');
});

module.exports = { getBirds, patchBird };
