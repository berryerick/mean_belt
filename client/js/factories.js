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
      // callback(factory.questions)
    })
  }

  factory.create = function(info, callback){
    console.log('in questionFactory create method with: ', info);
    $http.post('/questions', info).success(function(output){
      console.log('post to /questions output: ', output);
      factory.question = output
      console.log("CURRUSER ", factory.currUser);
      $location.path('/')
      callback(info)
    })
  }

  return factory
})
