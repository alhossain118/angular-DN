const express = require('express');
let router = express.Router();


router.route('/')
  .get((req,res) => {
    res.send('users.route hit')
  })

module.exports = router;
