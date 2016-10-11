const express = require('express');
const Tcard = require('../../models/card/trapCard')

let router = express.Router();

router.route('/')
    .get((req, res) => {
        Tcard.find({}, (err, cardz) => {
            console.log('fetching all cardz');
            res.status(err ? 400 : 200).send(err || cardz)
        })
    })
    .post((req, res) => {
        Tcard.create(req.body, (err, card) => {
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
