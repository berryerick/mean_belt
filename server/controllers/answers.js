var mongoose = require('mongoose')
var Answer = mongoose.model('Answer')
var Question = mongoose.model('Question')


module.exports = {

  index: function(req, res){
    Answer.find({}, function(err, data){
      if(err) console.log(err)
      else {
        console.log("Questions index data: ", data)
        res.json(data)
      }
    })

    // Answer.show({_question: req.params.id}).populate('_user', '_question').exec(function(err, answers){
    //   console.log("answers in show method " , answers);
    //   res.json(answers)
    // })
  },
  like: function(req, res){
    console.log("in like function",req.params.id);
    Answer.update({_id: req.params.id}, {$inc: {likes: 1}}, function(err){
      if(err) console.log(err)
      else {
        // console.log("Questions index data: ", data)
        // res.json(Answer.findOne({_id: req.params.id}))
      }
    })
  },
  create: function(req, res){
    console.log('in answers controller create method with: ',req.body);
    var answer = new Answer(req.body)
    answer.save(function(err, answer){
      if (err) {
        console.log(err);
        res.json({status: false, messages: err});
      }
      else {
        console.log("created: ", answer);
        Question.update({_id: answer._question}, {$push: {answers: answer._id}}, function(){
          console.log("AM I IN THE QUESTIONS UPDATE SECTION?");
          res.json({status: true, answer: answer})
        })
      }
    })
  },
  update: function(req, res){},
  show: function(req, res){
    console.log("in questions show:", req.params.id);
    Answer.findOne({_id: req.params.id}, function(err, answer){
      if(err) console.log(err)
      else {
        console.log("Questions index data: ", answer)
        res.json(answer)
      }
    })
  },
  destroy: function(req, res){},

}
