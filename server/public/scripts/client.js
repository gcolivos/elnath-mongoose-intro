var app = angular.module('GameApp', ['ngRoute']);

app.config(function ($routeProvider) {
    //route provider decides what views and controllers go together
    $routeProvider.when('/', {
        templateUrl: '/views/game.html',
        controller: 'GameController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});