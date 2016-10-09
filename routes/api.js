const express     = require('express');
let router        = express.Router();

router.use('/monsterCards', require('./monsterCards'))
router.use('/spellCards', require('./spellCards'))
router.use('/trapCards', require('./trapCards'))


module.exports = router
