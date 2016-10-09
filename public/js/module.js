var app = angular.module('myApp', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl:'html/home.html'
    })
    // .state('home',{
    //   url:'/',
    //   templateUrl:'html/home.html',
    //   controller:'mainCtrl'
    // })

    $urlRouterProvider.otherwise('/')
})
