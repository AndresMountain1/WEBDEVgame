const express = require("express")
const app = express()


app.listen(3000)

const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  password: Number
});

module.exports = mongoose.model('User', usersSchema);



