var app = angular.module('SuggestionBox',['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '../home.html',
        controller: 'HomeController'
    })
        .when('/suggestion/:id', {
            templateUrl: '../suggestion.html',
            controller: 'SuggestionController'
        })
        .otherwise({redirectTo: '/'});
})