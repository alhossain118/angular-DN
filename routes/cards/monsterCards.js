const express = require('express');
const Mcard = require('../../models/card/monsterCard')
let router = express.Router();

// router.get('/', (req,res) => {
// Stock.find({}, (err, stocks) => {
//   res.status(err ? 400 : 200).send(err || stocks)
// })
// })
//
// router.post('/', (req,res) => {
// Stock.create(req.body, (err, symbol) => {
//   res.status(err ? 400 : 200).send(err || symbol)
// })
// })
//
// router.route('/:id')
// .delete(function(req,res){
//   Stock.findByIdAndRemove(req.params.id, err => {
//     res.status(err? 400:200).send(err);
//   });
// });

router.route('/')
    .get((req, res) => {
        Mcard.find({}, (err, cardz) => {
            console.log('fetching all cardz');
            res.status(err ? 400 : 200).send(err || cardz)
        })
    })
    .post((req, res) => {
        Mcard.create(req.body, (err,card) => {
          res.status(err ? 400 : 200).send(err || card)
        })
    })

module.exports = router;
