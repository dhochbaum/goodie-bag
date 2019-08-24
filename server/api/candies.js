const router = require('express').Router()

const Candy = require('../db/models/Candy')

router.get('/', async (req, res, next) => {
  res.json(await Candy.findAll());
});

router.get('/:id', async (req, res, next) => {
  res.json(await Candy.findById(req.params.id));
});

// UPDATE a candy by id
router.put('/:id', async (req, res) => {
  try {
    const candy = await Candy.findById(req.params.id);
    const updated = await candy.update(req.body);
    const obj = {
      message: 'Updated successfully',
      candy: updated
    };
    res.status(200);
    res.json(obj);
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = router