(function() {
    function TaskCtrl($scope, $firebaseArray) {
      var ref = firebase.database().ref().child("tasks");
      // create a synchronized array
      $scope.tasks = $firebaseArray(ref);
      $scope.sortType = 'priorityCode'; // set the default sort type
      $scope.sortReverse = true;  // set the default sort order

      var getPriorityCode = function(priorityText) {
        var priorityCodes = {
          'low': 1,
          'med': 2,
          'high': 3
        };

        return priorityCodes[priorityText];
      };

      // add new items to the array
      // the task is automatically added to our Firebase database!
      $scope.addTask = function() {
        $scope.tasks.$add({
          text: $scope.newTaskText,
          priority: $scope.newTaskPriority,
          priorityCode: getPriorityCode($scope.newTaskPriority),
          created: firebase.database.ServerValue.TIMESTAMP,
          completed: false
        });
        $scope.newTaskText = '';
        $scope.newTaskPriority = '';
      };

      $scope.completeTask = function(task) {
          task.completed = !task.completed;
          $scope.tasks.$save(task);
      };
    }

    angular
      .module('blocitoff')
      .controller('TaskCtrl', ['$scope', '$firebaseArray', TaskCtrl]);
 })();
