var mongoose = require('mongoose');
var users = require('../controllers/users.js');
var questions = require('../controllers/questions.js');
// var CONTROLLERNAME = require('../controllers/CONTROLLERNAME.js');



module.exports = function(app) {
  app.get('/login', function(req, res){
    console.log("hello World");
    // res.json({app: 'working'})
    // users.index(req, res)
  }),
  app.post('/users', function(req, res){
    console.log('in post /users route with: ', req.body);
    users.create(req, res)
  })
  app.post('/questions', function(req, res){
    console.log('in post /questions route with: ', req.body);
    questions.create(req, res)
  })
}
