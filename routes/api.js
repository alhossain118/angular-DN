const express     = require('express');
let router        = express.Router();

router.use('/cards', require('./cards'))

module.exports = router
