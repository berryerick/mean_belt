var mean_belt = angular.module('mean_belt', ['ngRoute'])

mean_belt.config(function($routeProvider){

  $routeProvider
  .when('/login',{
    templateUrl: "/partials/login.html"
  })
  .when('/',{
    templateUrl: "/partials/dashboard.html"
  })
  .when('/new_question',{
    templateUrl: "/partials/new_question.html"
  })
  .when('/question/:id',{
    templateUrl: "/partials/question.html"
  })
  .when('/question/:id/new_answer',{
    templateUrl: "/partials/answer.html"
  })
  .otherwise({
    redirectTo: '/login'
  })
})
