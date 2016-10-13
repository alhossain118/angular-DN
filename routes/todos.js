const express = require('express');
let Todo = require('../models/todo')
let router = express.Router();

//   router.get('/', (req,res) => {
//   Stock.find({}, (err, stocks) => {
//     res.status(err ? 400 : 200).send(err || stocks)
//   })
// })
  router.route('/')
    .get((req,res) => {
      Todo.find({}, (err,todos) => {
        res.status(err ? 400 : 200).send(err || todos)
      })
    })
    .post((req,res) => {
      Todo.create(req.body, (err, todo) => {
        res.status(err ? 400 : 200).send(err || todo)
      })
    })

  router.route('/:id')
      .put((req,res) => {
        Todo.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err,updated) => {
          res.status(err? 400:200).send(err || updated);
        })
      })
      .delete((req,res) => {
        Todo.findByIdAndRemove(req.params.id ,err => {
          res.status(err? 400:200).send(err);
        })
      })

module.exports = router;
