const router = require('express').Router()

const Candy = require('../db/models/Candy')

router.get('/', async (req, res, next) => {
  res.json(await Candy.findAll());
});

module.exports = router