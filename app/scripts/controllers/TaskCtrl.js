(function() {
    function TaskCtrl($scope, $firebaseArray) {
      var ref = firebase.database().ref().child("tasks");
      // create a synchronized array
      $scope.tasks = $firebaseArray(ref);
      // add new items to the array
      // the task is automatically added to our Firebase database!
      $scope.addTask = function() {
        $scope.tasks.$add({
          text: $scope.newTaskText,
          created: firebase.database.ServerValue.TIMESTAMP,
          completed: false
        });
      };

      $scope.completeTask = function(task) {
        // console.log(task.completed);
        // if (task.status) {
          // ref.child(task.$id).update({completed: !task.completed});
          task.completed = !task.completed;
          $scope.tasks.$save(task);
        // };
      };
    }

    angular
      .module('blocitoff')
      .controller('TaskCtrl', ['$scope', '$firebaseArray', TaskCtrl]);
 })();
