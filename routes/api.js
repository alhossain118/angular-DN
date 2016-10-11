const express     = require('express');
let router        = express.Router();

router.use('/monsterCards', require('./cards/monsterCards'))
router.use('/spellCards', require('./cards/spellCards'))
router.use('/trapCards', require('./cards/trapCards'))

router.use('/users', require('./users'))

module.exports = router
