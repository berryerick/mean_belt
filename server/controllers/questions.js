var mongoose = require('mongoose')
var Question = mongoose.model('Question')

module.exports = {

  index: function(req, res){
    Question.find({}, function(err, data){
      if(err) console.log(err)
      else {
        console.log("Questions index data: ", data)
        res.json(data)
      }
    })
  },
  create: function(req, res){
    console.log('in questions controller create method with: ',req.body);
    var question = new Question(req.body)
    question.save(function(err, question){
      if (err) {
        console.log(err);
        res.json({status: false, messages: err});
      }
      else {
        console.log("created: ", question);
        res.json({status: true, question: question})
      }
    })
  },
  // update: function(req, res){
  //   console.log("in question update", req.body);
  //
  // },
  show: function(req, res){
    console.log("in questions show:", req.params.id);
    // Question.findOne({_id: req.params.id}, function(err, question){
    //   if(err) console.log(err)
    //   else {
    //     console.log("Questions index data: ", question)
    //     res.json(question)
    //   }
    // })
    Question.findOne({_id: req.params.id}).populate("answers").exec(function(err, question){
      console.log("here is the question",question);
      res.json(question)
    })

  },
  destroy: function(req, res){},

}
