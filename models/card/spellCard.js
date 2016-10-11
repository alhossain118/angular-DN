const mongoose = require('mongoose');

let spellCard = new mongoose.Schema({
  cardName: String,
  image: String,
  typeOfSpell:{
    type: String,
    default: "Normal"
  },
  banlist: {
    type: Number,
    default: 3
  },
  effectDesc: String
})

let Scard = mongoose.model('Scard', spellCard);

module.exports = Scard;
