const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const request = require('request');

const JWT_SECRET = 'fwoief2nf2903nf';

let userSchema = new mongoose.Schema({
  email: String,
  password: String,
  displayName: String,
  profileImage: String,
  admin: {type: Boolean, default: false},
  facebook: String
});

// userSchema.statics.authorize = function (paramsObj = {admin:false}){
//   return function (res,req,next){
//     let tokenHeader = req.headers.
//   }
// }

let User = mongoose.model('User', userSchema);

module.exports = User;
