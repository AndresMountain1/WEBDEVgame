
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  password: Number
});

const iaSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  iaName: String,
  iaCommentaire: String,
  iaFileName: String

 
});


const playerSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  playerName: {type: Schema.ObjectId, ref: 'User'} ,
  Type: {type: Schema.ObjectId, ref: 'IA'}

});



module.exports = mongoose.model('User', usersSchema);
module.exports = mongoose.model('IA', iaSchema);
module.exports = mongoose.model('Player', playerSchema);



