const mongoose = require('mongoose');

let monsterCard = new mongoose.Schema({
  cardName: {
    type:String,
    required: true
  },
  attribute: {
    type: String,
    default: "Water"
  },
  level: {
    type: Number,
    default: 0
  },
  image: {
    type: String,
    default: "No image provided"
  },
  type: {
    type:String,
    default: "Zombie"
  },
  effect: {
    type: Boolean,
    default: false
  },
  effectDesc: String,
  banlist: {
    type: Number,
    default: 3
  },
  normal: {
    type: Boolean,
    default: false
  },
  fusion: {
    type: Boolean,
    default: false
  },
  synchro: {
    type: Boolean,
    default: false
  },
  xyz: {
    type: Boolean,
    default: false
  },
  pendulum: {
    type: Boolean,
    default: false
  },
  tuner: {
    type: Boolean,
    default: false
  },
  gemini: {
    type: Boolean,
    default: false
  },
  union: {
    type: Boolean,
    default: false
  },
  spirit: {
    type: Boolean,
    default: false
  },
  flip: {
    type: Boolean,
    default: false
  },
  toon: {
    type: Boolean,
    default: false
  },


})

var Mcard = mongoose.model('Mcard', monsterCard);

module.exports = Mcard;
