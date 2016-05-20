var mongoose = require('mongoose')
var Schema = mongoose.Schema

var questionSchema = new mongoose.Schema({
  title: {type: String, required: true, unique: true, minlength: 10,},
  description: {type: String,},
  answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps: true})

var Question = mongoose.model("Question", questionSchema)
