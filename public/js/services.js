angular.module('myApp')

.service('MonsterCard', function($http) {
    this.createCard = (card) => {
        return $http.post('/api/monsterCards', card)
    }
    // this.getSavedStock = () => {
    //     return $http.get('/api/generalStocks')
    // }
    // this.removeStock = (id) => {
    //     return $http.delete(`/api/generalStocks/${id}`)
    // }
    // this.getOneStock = id => {
    //     return $http.get(`/api/generalStocks/${id}`)
    // }
})
