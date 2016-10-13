var app = angular.module('myApp', ['ui.router','ui.bootstrap','ngDragDrop','ngAnimate'])

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
    .state('todo', {
      url:'/todo',
      templateUrl:'html/todo.html',
      controller:'todoCtrl'
    })


    $urlRouterProvider.otherwise('/')
})
