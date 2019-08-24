const router = require('express').Router()

const Candy = require('../db/models/Candy')

router.get('/', async (req, res, next) => {
  res.json(await Candy.findAll());
});

router.get('/:id', async (req, res, next) => {
  console.log(req)
  res.json(await Candy.findOne({
    where: {
      id: req.params.id
    }
  }));
});

module.exports = router