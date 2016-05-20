mean_belt.controller('usersController', function(userFactory){
  console.log('in usersController')
  var that = this
  this.errors = []

  this.login = function(){
    console.log("in UC.login()", this.user)
    userFactory.create(this.user, function(data){
      console.log('in login callback with:', data)
      that.currUser = data
    })
  }
})
mean_belt.controller('dashController', function(userFactory){
  console.log('in dashController')
  var that = this
  this.errors = []
  this.currUser = userFactory.currUser

  // this.login = function(){
  //   console.log("in UC.login()", this.user)
  //   userFactory.create(this.user, function(data){
  //     console.log('in login callback with:', data)
  //     that.currUser = data
  //   })
  // }
})

mean_belt.controller('newQuestionController', function(userFactory, questionFactory){
  console.log('in newQuestionController')
  var that = this
  this.errors = []
  this.currUser = userFactory.currUser

  this.create = function(){
    console.log("in NQ.create()", this.question)
    this.question._user=this.currUser._id
    this.question.answers = []
    questionFactory.create(this.question, function(data){
      console.log('in question create callback with:', data)
    })
    // userFactory.create(this.user, function(data){
    //   console.log('in login callback with:', data)
    //   that.currUser = data
    // })
  }
})
