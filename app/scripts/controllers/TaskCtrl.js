(function() {
    function TaskCtrl($scope, $firebaseArray) {
      var ref = firebase.database().ref().child("tasks");
      // create a synchronized array
      $scope.tasks = $firebaseArray(ref);
      // add new items to the array
      // the task is automatically added to our Firebase database!
      $scope.addTask = function() {
        $scope.tasks.$add({
          text: $scope.newTaskText
        });
      };
    }

    angular
      .module('blocitoff')
      .controller('TaskCtrl', ['$scope', '$firebaseArray', TaskCtrl]);
 })();
