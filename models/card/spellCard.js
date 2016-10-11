const mongoose = require('mongoose');

let spellCard = new mongoose.Schema({
  cardName: String,
  picture: String,
  quickPlay:{
    type: Boolean,
    default: false
  },
  continuous:{
    type: Boolean,
    default: false
  },
  ritual: {
    type: Boolean,
    default: false
  },
  equip: {
    type: Boolean,
    default: false
  },
  field: {
    type: Boolean,
    default: false
  },
  banlist: {
    type: Number,
    default: 3
  }
})

let Scard = mongoose.model('Scard', spellCard);

module.exports = Scard;
