const express = require('express');
const Scard = require('../../models/card/spellCard')

let router = express.Router();

router.route('/')
    .get((req, res) => {
        Scard.find({}, (err, cardz) => {
            console.log('fetching all spell cardz');
            res.status(err ? 400 : 200).send(err || cardz)
        })
    })
    .post((req, res) => {
        Scard.create(req.body, (err, card) => {
            res.status(err ? 400 : 200).send(err || card)
        })
    })

router.route('/:id')
    .delete(function(req, res) {
        Scard.findByIdAndRemove(req.params.id, err => {
            res.status(err ? 400 : 200).send(err);
        });
    });

module.exports = router;
