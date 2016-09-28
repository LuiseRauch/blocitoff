angular.module('blocitoff')
  .filter('expired', function () {
    return function (items, isExpired) {
      var filtered = [];
      var timeNow = new Date().getTime();
      var expired = (isExpired === undefined) ? true : isExpired;

      var isTaskExpired = function (task) {
        return ((timeNow - task.created) >= 604800000);
      };

      if (expired) {
        angular.forEach(items, function (item) {
          if (isTaskExpired(item) || item.completed === true) {
            filtered.push(item);
          }
        });
      } else {
        angular.forEach(items, function (item) {
          if (!isTaskExpired(item) && !item.completed) {
            filtered.push(item);
          }
        });
      }

      return filtered;
    };
  });
