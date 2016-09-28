(function() {
    function config($stateProvider, $locationProvider) {
      $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });
      $stateProvider
      .state('active', {
          url: '/',
          controller: 'TaskCtrl as task',
          templateUrl: '/templates/active.html'
      }).state('history', {
          url: '/history',
          controller: 'TaskCtrl as task',
          templateUrl: '/templates/history.html'
      });
      }

    angular
    .module('blocitoff', ["firebase", 'ui.router'])
    .config(config);
})();
