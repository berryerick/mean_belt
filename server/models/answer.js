var mongoose = require('mongoose')
var Schema = mongoose.Schema

var answerSchema = new mongoose.Schema({
  title: {type: String, required: true, unique: true, minlength: 5,},
  description: {type: String,},
  user: {type: String, required:true},
  _question: {type: Schema.Types.ObjectId, ref: 'questions'},
  likes: {type: Number}
}, {timestamps: true})

var Answer = mongoose.model("Answer", answerSchema)
