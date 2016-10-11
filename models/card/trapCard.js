const mongoose = require('mongoose');

let trapCard = new mongoose.Schema({
  cardName: String,
  image: String,
  typeOfTrap: {
type: String,
    default: "Normal"
  },
  effectDesc:{
    type: String
  },
  banlist: Number

})

let Tcard = mongoose.model('Tcard', trapCard)

module.exports = Tcard;
