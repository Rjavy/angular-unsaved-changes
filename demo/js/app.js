(function () {
    angular
    .module('demoApp', ['ngRoute', 'unsavedChanges'])
    .config(router);

    function router($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/form.html',
            controller: 'demoController',
            controllerAs: 'demo'
        });
    }
})();