const express = require('express');
const Mcard = require('../../models/card/monsterCard')
let router = express.Router();

router.route('/')
    .get((req, res) => {
        Mcard.find({}, (err, cardz) => {
            console.log('fetching all monster cardz');
            res.status(err ? 400 : 200).send(err || cardz)
        })
    })
    .post((req, res) => {
        Mcard.create(req.body, (err, card) => {
            res.status(err ? 400 : 200).send(err || card)
        })
    })

router.route('/:id')
    .delete(function(req, res) {
        Mcard.findByIdAndRemove(req.params.id, err => {
            res.status(err ? 400 : 200).send(err);
        });
    });

module.exports = router;
