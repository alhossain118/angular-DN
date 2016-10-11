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
    .controller('addCardCtrl', function($scope,MonsterCard){
      console.log('addCardCtrl');

      $scope.addCard = function (card) {
        console.log('card', card);
        if(card.typeOfCard ==='Monster'){
          alert('its a Monster card')
          MonsterCard.createCard(card)
            .then(res => {
              console.log(res);
            })
        }
      }

    })
