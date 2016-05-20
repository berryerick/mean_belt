var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
}, {timestamps: true})

var User = mongoose.model("User", userSchema)
