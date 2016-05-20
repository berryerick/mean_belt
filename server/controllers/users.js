var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = {

  index: function(req, res){
    User.find({}, function(err, data){
      if(err) console.log(err)
      else {
        console.log("Users index data: ", data)
        res.json(data)
      }
    })
  },
  create: function(req, res){
    console.log('in users controller create method with: ',req.body);
    User.find({name: req.body.name}, function(err, data){
      if(err) console.log(err);
      else {
        if (data.length == 0) {
          var user = new User(req.body)
          user.save(function(err, user){
            if (err) console.log(err);
            else {
              res.json(user)
            }
          })
        }
        else {
          res.json(data[0])
        }
        console.log("find user data: ",data);
      }
    })
    // console.log(user[0]);
    //
    // else{
    //   var user = users.create(req, res)
    // }
  },
  update: function(req, res){},
  show: function(req, res){},
  destroy: function(req, res){},

}
