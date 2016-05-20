mean_belt.factory('userFactory', function($http, $location, $routeParams){
  var factory = {}
  factory.users = []
  factory.currUser = {}


  factory.index = function(callback){
    $http.get('/users').success(function(output){
      console.log('user factory index method output: ', output)
      // factory.users = output
      // callback(factory.users)
    })
  }

  factory.create = function(info, callback){
    console.log('in userFactory create method with: ', info);
    $http.post('/users', info).success(function(output){
      console.log('post to /users output: ', output);
      factory.currUser = output
      console.log("CURRUSER ", factory.currUser);
      $location.path('/')
      callback(factory.currUser)
    })
  }

  return factory
})


mean_belt.factory('questionFactory', function($http, $location, $routeParams){
  var factory = {}
  factory.questions = []
  factory.currUser = {}


  factory.index = function(callback){
    $http.get('/questions').success(function(output){
      console.log('question factory index method output: ', output)
      // factory.questions = output
      callback(output)
    })
  }

  factory.create = function(info, callback){
    console.log('in questionFactory create method with: ', info);
    $http.post('/questions', info).success(function(output){
      console.log('post to /questions output: ', output);
      if(output.status == true){
        factory.question = output
        console.log("question ", factory.question);
        callback(output)
        $location.path('/')
      }
      else{
        callback(output)
      }
    })
  }
  factory.show = function(info, callback){
    console.log("in questionfactory.show method", info);
    $http.get('/questions/'+info).success(function(output){
      console.log("show output", output);
      callback(output)
    })
  }
  factory.update = function(question, answer, callback){
    console.log("in questionfactory.update method", answer);
    $http.post('/questions/'+question+'/new_answer', answer).success(function(output){
      console.log("show output", output);
      callback(output)
    })
  }

  return factory
})

mean_belt.factory('answerFactory', function($http, $location, $routeParams){
  var factory = {}
  factory.answers = []
  factory.currUser = {}


  factory.index = function(callback){
    $http.get('/answers').success(function(output){
      console.log('answer factory index method output: ', output)
      // factory.answers = output
      callback(output)
    })
  }

  factory.create = function(info, callback){
    console.log('in answerFactory create method with: ', info);
    $http.post('/answers', info).success(function(output){
      console.log('post to /answers output: ', output);
      if(output.status == true){
        factory.answer = output
        console.log("answer ", factory.answer);
        callback(output)
        $location.path('/question/'+ output.answer._question)
      }
      else{
        callback(output)
      }
    })
  }
  factory.update = function(info, callback){
    console.log("in answerfactory update method", info);
    $http.post('/like/'+info).success(function(output){
      console.log("answers show output", output);
      callback(output)
    })
  }

  return factory
})
