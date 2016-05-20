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


mean_belt.controller('dashController', function(userFactory, questionFactory){
  console.log('in dashController')
  var that = this
  this.errors = []
  this.currUser = userFactory.currUser
  this.getQuestions = function(){
    questionFactory.index(function(data){
      console.log('get questions method data: ', data)
      that.questions = data
    })
  }
  this.getQuestions()

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
    // this.question._user=this.currUser._id
    this.question.answers = []
    questionFactory.create(this.question, function(data){
      console.log('in question create callback with:', data)
      if(data.status === false){
        console.log("ERROR");

        that.errors.push("Minimum length of a question is 10 characters")
      }
    })
  }
})


mean_belt.controller('questionController', function(userFactory, questionFactory,answerFactory, $routeParams){
  console.log('in questionController with ', $routeParams.id)

  var that = this
  this.errors = []
  this.currUser = userFactory.currUser
  questionFactory.show($routeParams.id, function(question){
    console.log(question);
    that.question = question
  })
  // answerFactory.show($routeParams.id, function(answers){
  //   console.log(answers);
  //   that.answers = answers
  // })
  this.like = function(answer){
    console.log(answer);
    answerFactory.update(answer, function(){

    })
    for (i in this.question.answers){
      if (this.question.answers[i]._id == answer){
        console.log("liked");
        this.question.answers[i].likes ++
      }
    }
  }

})


mean_belt.controller('answerController', function(userFactory, questionFactory,answerFactory, $routeParams){
  console.log('in answerController')
  var that = this
  this.errors = []
  this.currUser = userFactory.currUser

  questionFactory.show($routeParams.id, function(question){
    console.log(question);
    that.question = question
  })


  this.create = function(){
    this.answer.user=this.currUser.name
    this.answer._question=this.question._id
    this.answer.likes=0
    console.log("in AC.create()", this.answer)
    answerFactory.create(this.answer, function(data){
      console.log('in answer create callback with:', data)
      if(data.status === false){
        console.log("ERROR");

        that.errors.push("Minimum length of an answer title is 5 characters")
      }
      else{
        console.log(data.answer._question);
        // questionFactory.update(data.answer._question, data.answer._id, function(data){

        // })
      }

    })

  }
})
