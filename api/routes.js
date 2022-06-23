const router = require('express').Router();
const Board = require('./models');

router.get("/snbds", async (request, response) => {
  const snowboards = await Board.find({});

  try {
    response.send(snowboards);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;