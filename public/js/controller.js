angular.module('myApp')
    .controller('mainCtrl', ["$scope", function($scope) {
        console.log('mainCtrl');
        // console.log($scope.name);
        $scope.names = ['pizza', 'unicorns', 'robots'];
        $scope.my = {
            favorite: 'unicorns'
        };

    }])
    .controller('addCardCtrl', function($scope, MonsterCard, SpellCard, TrapCard) {
        console.log('addCardCtrl');

        $scope.addCard = function(card) {
            console.log('card', card);
            if (card.typeOfCard === 'Monster') {
                alert('its a Monster card')
                MonsterCard.createMCard(card)
                    .then(res => {
                        console.log(res);
                    })
            }
            if (card.typeOfCard === 'Spell') {
                SpellCard.createSCard(card)
                    .then(res => {
                        console.log(res);
                    })
            }
            if (card.typeOfCard === 'Trap') {
                TrapCard.createTCard(card)
                    .then(res => {
                        console.log(res);
                    })
            }
        }

    })
