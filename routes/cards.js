const express   = require('express');
let router      = express.Router();

  router.route('/')
    .get((req,res) => {
      res.send('hit cards route\n')
    })

module.exports = router;
