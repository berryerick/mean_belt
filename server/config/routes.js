var mongoose = require('mongoose');
var users = require('../controllers/users.js');
var questions = require('../controllers/questions.js');
var answers = require('../controllers/answers.js');
// var CONTROLLERNAME = require('../controllers/CONTROLLERNAME.js');



module.exports = function(app) {
  app.get('/login', function(req, res){
    console.log("hello World");
    // res.json({app: 'working'})
    // users.index(req, res)
  })
  app.post('/users', function(req, res){
    console.log('in post /users route with: ', req.body);
    users.create(req, res)
  })
  app.get('/questions',function(req, res){
    console.log(' in get /questions');
    questions.index(req, res)
  })
  app.get('/questions/:id',function(req, res){
    console.log(' in get /questions/:id');
    questions.show(req, res)
  })
  app.post('/questions', function(req, res){
    console.log('in post /questions route with: ', req.body);
    questions.create(req, res)
  })
  // app.post('/questions/:id/new_answer', function(req, res){
  //   console.log('in post /questions/:id/newanswer route with: ', req.body, req.params.id);
  //   questions.update(req, res)
  // })
  app.post('/answers', function(req, res){
    console.log('in post /questions route with: ', req.body);
    answers.create(req, res)
  })
  app.get('questions/:id/answers', function(req, res){
    console.log('in post /questions route with: ', req.body);
    answers.show(req, res)
  })
}
