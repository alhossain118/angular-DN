angular.module('myApp')
  .controller('mainCtrl',["$scope",  function($scope){
    console.log('mainCtrl');

    $scope.test = {
      fav:'test1'
    }
    console.log($scope.test.fav)


    $scope.monster = true;
    $scope.spell = false;
    $scope.trap = false;

    $scope.name = true;
    // console.log($scope.name);
    $scope.names = ['pizza', 'unicorns', 'robots'];
      $scope.my = { favorite: 'unicorns' };

  }])
