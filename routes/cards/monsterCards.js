const express   = require('express');
const Mcard     = require('../../models/card/monsterCard')
let router      = express.Router();

  router.route('/')
    .get((req,res) => {
      res.send('hit cards route\n')
  })

module.exports = router;
