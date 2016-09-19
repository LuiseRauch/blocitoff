(function() {
    function config($stateProvider, $locationProvider) {
      $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });
      $stateProvider
        .state('home', {
            url: '/',
            controller: 'TaskCtrl as task',
            templateUrl: '/templates/home.html'
        });

    }

    angular
    .module('blocitoff', ["firebase", 'ui.router'])
    .config(config);
})();
