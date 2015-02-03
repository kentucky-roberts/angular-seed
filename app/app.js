var myApp = angular.module('myApp', ['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers', []);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'templates/home.html',
            controller:  'RegistrationController'
        }).
        when('/login', {
            templateUrl: 'templates/login.html',
            controller:  'RegistrationController'
        }).
        when('/register', {
            templateUrl: 'templates/register.html',
            controller:  'RegistrationController'
        }).
        when('/about', {
            templateUrl: 'templates/about.html',
            controller:  'RegistrationController'
        }).
        when('/contact', {
            templateUrl: 'templates/contact.html',
            controller:  'RegistrationController'
        }).
        when('/sandbox', {
            templateUrl: 'templates/sandbox.html',
            controller:  'RegistrationController'
        }).
        otherwise({
            redirectTo: '/login'
        });
}]);