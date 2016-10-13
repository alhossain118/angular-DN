angular.module('myApp')
    .controller('mainCtrl', ["$scope", function($scope) {
        console.log('mainCtrl');
    }])
    .controller('addCardCtrl', function($scope, MonsterCard, SpellCard, TrapCard) {
        console.log('addCardCtrl');
    })
    .controller('todoCtrl', function($scope,Todo){
        console.log('todoCtrl!');
        var indexx = 0;

        Todo.getTodos()
          .then(res => {
            console.log(res);
            $scope.lists = res.data
          })
        // $scope.lists = [];
        $scope.addTodo = todo => {
          Todo.createTodo(todo)

          console.log(todo);
          var item = angular.copy(todo)
          console.log(item);
          $scope.lists.push(item)
        }

        $scope.deleteTodo = (list,index) => {
          console.log('list', list._id);
          console.log('index', index);
          Todo.deleteTodo(list._id)
          $scope.lists.splice(index,1)
        }
        $scope.editTodo = (list,index) => {
          indexx = index;
          // console.log('index', index);
          var editName = {
            _id:list._id,
            name: list.name,
            number: list.number
          }
          $scope.edit = editName;
        }
          $scope.saveEdit = (todo) => {
            // console.log($scope.edit);
            Todo.editTodo(todo)
              .then(res => {
                console.log(res.data);
                console.log('index', indexx);
                $scope.lists.splice(indexx,1,res.data)
              })
            // console.log(todo);
          }
    })
