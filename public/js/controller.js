angular.module('myApp')
  .controller('mainCtrl',["$scope",  function($scope){
    console.log('mainCtrl');
    $scope.name='Alamin';
    console.log($scope.name);
  }])
