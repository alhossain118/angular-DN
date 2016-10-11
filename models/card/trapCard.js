const mongoose = require('mongoose');

let trapCard = new mongoose.Schema({
  cardName: String,
  picture: String,
  normal:{
    type: Boolean,
    default: false
  },
  continuous: {
    type: Boolean,
    default: false
  },
  counter: {
    type: Boolean,
    default: false
  },
})

let Tcard = mongoose.model('Tcard', trapCard)

module.exports = Tcard;
