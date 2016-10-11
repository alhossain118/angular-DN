var app = angular.module('myApp', ['ui.router','ui.bootstrap'])

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl:'html/home.html'
    })
    .state('profile',{
      url:'/profile',
      templateUrl:'html/profile.html'
    })
    .state('addCard',{
      url:'/addCard',
      templateUrl:'html/addCard.html',
      controller: 'addCardCtrl'
    })


    $urlRouterProvider.otherwise('/')
})
