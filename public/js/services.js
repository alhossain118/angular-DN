angular.module('myApp')

.service('Todo', function($http) {
  this.getTodos = () => {
    return $http.get(`api/todos`)
  }
  this.createTodo = todo => {
    return $http.post(`api/todos`, todo)
  }
  this.editTodo = todo => {
    console.log('hit');
    return $http.put(`api/todos/${todo._id}`, todo)
  }
  this.deleteTodo = todo => {
    return $http.delete(`api/todos/${todo}`)
  }
})
.service('MonsterCard', function($http) {
    this.createMCard = (card) => {
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

.service('SpellCard', function($http) {
    this.createSCard = (card) => {
        return $http.post('/api/spellCards', card)
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

.service('TrapCard', function($http) {
    this.createTCard = (card) => {
        return $http.post('/api/trapCards', card)
    }

})
